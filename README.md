# AI Chatbot Angular Node

This project is an AI chatbot client built with Angular and Node.js. It leverages Angular for the frontend and Node.js with Express for the backend, integrating with Google's Generative AI for chatbot functionalities.

# Do Not Forget
- To get your API_KEY="<Google Generative AI key> " from https://aistudio.google.com/prompts/new_chat
- To run npm install after cloning the repository
- You must clone ai-chatbot-angular-node-client inside ai-chatbot-angular-node


## Project Structure

```
.env
.gitignore
ai-chatbot-angular-node-client/
	.angular/
	.cache/
	.editorconfig
	.gitignore
	.gitmodules
	.vscode/
		extensions.json
		launch.json
		tasks.json
	angular.json
	package.json
	README.md
	src/
		app/
			app-routing.module.ts
			app.component.css
			app.component.html
			app.component.spec.ts
			app.component.ts
			services/
				chat-bot.service.ts
		assets/
		index.html
		main.ts
		styles.css
	tailwind.config.js
	tsconfig.app.json
	tsconfig.json
	tsconfig.spec.json
index.js
package.json
README.md
```

## Backend (Node.js)

The backend is implemented in index.js. It uses Express to set up a server and integrates with Google's Generative AI.

### Running the Server

Run `node index.js` to start the server. The server will listen on port 4000.

### Environment Variables

The backend uses environment variables defined in the .env file. Ensure you have the [`API_KEY`] set for the Google Generative AI.

### Example Code

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const app = express();
app.use(cors());
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

async function sendMessage(message) {
    const model = await genAI.getGenerativeModel({ model: 'gemini-pro' });
    const data = await model.generateContent(message);
    return data;
}

app.use(express.json());
app.post('', (request, response) => {
    let message = request.body.message;
    sendMessage(message).then((data) => {
        response.send({user: 'server', message: data.response.text()});
    });
});

app.listen(4000, () => {
    console.log('App is running...');
});
```

## Configuration Files

### Git Ignore

The .gitignore files in the root and ai-chatbot-angular-node directories specify files and directories to be ignored by Git.

## Dependencies

### Backend Dependencies

The backend dependencies are listed in package.json.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please read the CONTRIBUTING.md for guidelines on how to contribute to this project.

## Contact

For any questions or feedback, please open an issue on GitHub.

---

This documentation provides an overview of the project structure, setup instructions, and key components. For more detailed information, refer to the respective files and comments within the code.