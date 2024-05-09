import express, { Application } from 'express';
import swaggerUI from 'swagger-ui-express';

import router from './routes';
import { apiDocumentation } from './docs/apidoc';

const app: Application = express();

const PORT = process.env.PORT || 8000;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDocumentation));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(PORT, () => {
	console.log(`🚀 Server is running on port ${PORT}`);
});

app.use('/api', router);
