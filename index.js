import { dump } from 'js-yaml';
import { writeFileSync } from 'fs';

function generateOpenAPI(openApiObject) {
    try {
        console.log('Generating openapi.yml file');
        const yamlDocument = dump(openApiObject, {
            skipInvalid: false,
            noRefs: true,
        });

        const location = 'openapi.yml';

        writeFileSync(location, yamlDocument);
        console.log('Successfully generated openapi.yml at ' + location);
    } catch (error) {
        console.error('Failed to generate openapi.yml');
        console.error(error);
    }
}

export default generateOpenAPI;