export default (userOptions) => (input) => {
    return function uglify(log) {
        const UglifyJS = require('uglify-js');

        return new Promise(resolve => {
            const files = input.map(file => {
                const options = {
                    inSourceMap: file.map,
                    ...userOptions,
                    fromString: true
                };

                const result = UglifyJS.minify(file.data, options);

                log(file.path);

                return {
                    path: file.path,
                    data: result.code,
                    map: result.map
                };
            });

            resolve(files);
        });
    };
};
