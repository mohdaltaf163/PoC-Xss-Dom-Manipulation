public class XSSController {
    public String userInput { get; set; }
    
    public XSSController() {
        userInput = ''; // Initialize to an empty string
    }

    public String getUserInput() {
        System.debug('User input is: ' + userInput); // Debug to confirm the value
        return userInput;
    }
}
