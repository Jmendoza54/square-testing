import { ref } from '#imports';

const useChildSquare = () => {

    const show = ref(true);

    const bgColor = ref(0);
    const second = ref(0);
    let contador: NodeJS.Timeout;

    //get number random to between 1 - 10 to set background color
    const getNumber = (): number => {

        return Math.floor(Math.random() * 10) + 1;;
    }

    //function to count seconds hover the child
    const startCount = () => {
        second.value = 0;
        //count every second
        contador = setInterval(() => {
            second.value++;
            console.log(second.value)
            //if we star longer than 2 secs, stopcounter and hide square
            if (second.value > 2) {
                stopSeconds();
                show.value = false;
            }
        }, 1000);
    }

    //function to stop counter
    const stopSeconds = () => {
        clearInterval(contador);
    };

    //function to change color random on hover
    const changeColor = () => {
        const newColor = getNumber();

        //compare if its same color, change it
        if (newColor == bgColor.value)
            changeColor();
        else
            bgColor.value = newColor;

            //start the count on hover
        startCount();
    }

    //set bgcolor
    bgColor.value = getNumber();

    return {
        //parameters
        show,
        bgColor,
        //functions
        changeColor,
        stopSeconds
    }
}

export default useChildSquare;