import json

from flask import Flask ,  request, jsonify
import os
import anthropic
from dotenv import load_dotenv

load_dotenv()
# Initialize  The Anthropic Api Key
API_KEY = os.getenv("API_KEY")
# Initialize the Anthropic client with the provided API key
client = anthropic.Anthropic(api_key=API_KEY)

app = Flask(__name__)
# Define the endpoint to handle POST requests containing a 'prompt'
@app.route('/execute_prompt', methods=['POST'])
def handle_prompt():
    # here the  JSON extracted from the request body
    data = request.json

    # here where i extract the prompt from the json data that been posted
    prompt = data.get('prompt')
    # here just to check if the prompt is sent or not
    print("The Prompt Data Is : ", prompt)
    # here to validate if there is no prompt it will return an error with 400 status Code

    if not prompt:
        return jsonify({'error': 'Prompt is required!'}), 400
    #if there is a prompt we can try to generate the response
    try:
        # Call the Anthropic API to generate a response based on the prompt
        response = client.messages.create(
            model="claude-3-opus-20240229",
            max_tokens=1034,
            temperature=0.5,
            system="hi\n",
            messages=[{
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": prompt
                    }
                ]
            }]
        )
        print("The Response From The Cluad Ai", response)
        # Extract relevant information from the response object
        # In this example, we assume the response object has a 'text' key
        # Extract the text from the content of the Message object
        response_text = response.content[0].text

        # Construct a JSON-serializable dictionary with the extracted information
        response_data = {'text': response_text}

        # Return the constructed dictionary as JSON
        return jsonify(response_data)

    except Exception as e:
        # handle the Error from the api
        return jsonify({'error': str(e)}), 500

