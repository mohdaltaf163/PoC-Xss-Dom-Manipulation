# LWC XSS Vulnerability Proof-of-Concept

This project demonstrates a Cross-Site Scripting (XSS) vulnerability in a Lightning Web Component (LWC) where user inputs are rendered directly in the DOM without proper sanitization. By using unescaped input, malicious HTML can be injected, potentially leading to security issues if not handled carefully. This example shows how vulnerabilities can appear in LWC if input is not sanitized, even though Salesforce applies several security measures to mitigate risks.

# Project Structure
LWC Component: sensitiveDisplay
HTML (sensitiveDisplay.html): Contains the input field for user entry and the display area for unencoded output.
JavaScript (sensitiveDisplay.js): Handles user input and directly injects it into the DOM, illustrating the XSS vulnerability.

# Proof-of-Concept Details
## Purpose
To illustrate a basic XSS scenario in LWC by allowing unencoded user input to be injected into the DOM, which could render HTML content directly if input is not sanitized. The primary objective of this PoC is to simulate how unescaped input can lead to security vulnerabilities.

![dom](https://github.com/user-attachments/assets/a72603b3-ae58-49bc-846c-c11d7754a00a)

## Vulnerable Code
In the JavaScript file (sensitiveDisplay.js), the displayUserInput method injects user input directly into a div element using innerHTML, without encoding or sanitizing the input. This demonstrates how untrusted data can manipulate the DOM, which could be exploited in various ways, such as displaying unwanted images or manipulating the DOM structure.

## Preventing XSS in LWC
To avoid XSS vulnerabilities, always sanitize user inputs and avoid direct DOM manipulation with innerHTML. Here are some secure coding practices:

- Use `textContent` instead of `innerHTML` when setting text in the DOM.
- Avoid using untrusted or user-provided HTML.
- Encode any input before displaying it.

## Notes
This proof-of-concept demonstrates the importance of secure coding practices and highlights potential risks if sanitization is overlooked in web components. Salesforce’s LWC has built-in security features like Locker Service and Content Security Policy (CSP), but developers should still be cautious about how they handle and render user input.
