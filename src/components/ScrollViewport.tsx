import React, {Component, CSSProperties} from 'react';

const EVENT_OPTS = {
    passive: true,
    capture: true
};

/**
 * https://github.com/developit/preact-scroll-viewport/blob/master/src/index.js
 */


type Props = {
    rowHeight?: number;
    defaultRowHeight?: number;
    overscan?: number;
    sync?: boolean;
    children?: any;
    style?: CSSProperties;
};

type State = {
    height: number;
    offset: number;
};

export default class ScrollViewport extends Component<Props, State> {
    _height: number = 0;
    base: any;
    state = {
        height: 0,
        offset: 0
    };

    resized = () => {
        let height = window.innerHeight || document.documentElement.offsetHeight;
        if (height !== this.state.height) {
            this.setState({height});
        }
    };

    scrolled = () => {
        let offset = Math.max(0, this.base && -this.base.getBoundingClientRect().top || 0);
        this.setState({offset});
        if (this.props.sync) this.forceUpdate();
    };

    computeRowHeight() {
        if (this._height) return this._height;
        let first = this.base && this.base.firstElementChild && this.base.firstElementChild.firstElementChild;
        return this._height = (first && first.offsetHeight || 0);
    }

    componentDidUpdate() {
        this.resized();
    }

    componentDidMount() {
        this.resized();
        this.scrolled();
        addEventListener('resize', this.resized, EVENT_OPTS);
        addEventListener('scroll', this.scrolled, EVENT_OPTS);
    }

    componentWillUnmount() {
        removeEventListener('resize', this.resized, EVENT_OPTS);
        removeEventListener('scroll', this.scrolled, EVENT_OPTS);
    }

    render() {
        let {overscan = 10, rowHeight, defaultRowHeight, children, ...props} = this.props;
        const {offset = 0, height = 0} = this.state;

        const finalRowHeight = rowHeight || this.computeRowHeight() || defaultRowHeight || 100;

        // compute estimated height based on first item height and number of items:
        let estimatedHeight = finalRowHeight * children.length;
        if (typeof props.style === 'string') {
            (props.style as string) += ' height:' + estimatedHeight + 'px;';
        } else {
            (props.style || (props.style = {})).height = estimatedHeight.toExponential() + 'px';
        }

        let start = 0,
            visibleRowCount = 1;

        if (finalRowHeight) {
            // first visible row index
            start = (offset / finalRowHeight) | 0;

            // actual number of visible rows (without overscan)
            visibleRowCount = (height / finalRowHeight) | 0;

            // Overscan: render blocks of rows modulo an overscan row count
            // This dramatically reduces DOM writes during scrolling
            if (overscan) {
                start = Math.max(0, start - (start % overscan));
                visibleRowCount += overscan;
            }
        }

        // last visible + overscan row index
        let end = start + 1 + visibleRowCount;

        // children currently in viewport plus overscan items
        let visible = children.slice(start, end);

        return (
            <div {...props} ref={base => this.base = base}>
                <div style={{position: 'relative', top: start * finalRowHeight}}>
                    {visible}
                </div>
            </div>
        );
    }
}
