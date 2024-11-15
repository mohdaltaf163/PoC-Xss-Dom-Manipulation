// force-app/main/default/lwc/sensitiveDisplay/sensitiveDisplay.js
import { LightningElement } from 'lwc';

export default class SensitiveDisplay extends LightningElement {
    userInput = '';

    handleInputChange(event) {
        this.userInput = event.target.value;
    }

    displayUserInput() {
        // Directly inject user input into the DOM without encoding
        const displayArea = this.template.querySelector('.display');
        displayArea.innerHTML = this.userInput; // Vulnerable to XSS if userInput contains scripts
    }
}
