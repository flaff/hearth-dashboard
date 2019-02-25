const
    Enzyme = require('enzyme'),
    ReactAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new ReactAdapter() });
