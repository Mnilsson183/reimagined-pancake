class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;

        this.#addKeyboardListeners
    }
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "a":
                    this.left = true;
                    break;
                case "d":
                    this.right = true;
                    break;
                case "w":
                    this.forward = true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "a":
                    this.left = true;
                    break;
                case "a":
                    this.left = true;
                    break;
                case "a":
                    this.left = true;
                    break;  
            }
        }
    }
}