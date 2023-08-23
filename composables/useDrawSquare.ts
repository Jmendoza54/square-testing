import { ref } from '#imports'

const useDrawSquare = () => {

    const sizeMainSquare = ref(0);
    const widthChildSize = ref(0);
    const numberSquares = ref(0);
    const divided = ref(0);
    const totalSquare = ref(0);
    const noEnter = ref(false);
    const square = ref(0);

    //Function to dra Main Square, with paramers 
    const drawContainer = (containerSize: number, childSize: number, numberOfChildren: number) => {
        //set values on reactive variables
        sizeMainSquare.value = containerSize;
        widthChildSize.value = childSize;
        numberSquares.value = numberOfChildren;
        //Get how many squares can draw in a row of the main Square
        divided.value = containerSize / childSize;
        //We get an integer number from divided
        totalSquare.value = Math.floor(divided.value);
        //Get the square of number squares to fill all the main square
        square.value = Math.pow(totalSquare.value, 2);

        //If number of child square requested is bigger than squares enter in main square we show the message
        if (square.value < numberSquares.value)
            noEnter.value = true;
        else {
            //if not, we set number square as number of children requested
            square.value = numberOfChildren;
        }
    };

    //return parameters and funcion to use in the component
    return {
        //parameters
        sizeMainSquare,
        widthChildSize,
        numberSquares,
        noEnter,
        square,
        //functions
        drawContainer
    }
}

export default useDrawSquare;