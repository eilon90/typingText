import { useEffect, useState } from "react";

function TypingText(props) {



    const [str, setStr] = useState('');
    const [num, setNum] = useState(0);
    function type() {
        const arr = props.text.split('');
        function addChar() {
            if (num > arr.length - 1) {return}
            setTimeout(function() {
                setNum(num + 1);
                setStr(str + arr[num]);
            }, props.time)
        }
        addChar();
    }

    useEffect(() => {
        type();
    }, [str])

    return(
        <div>
            <h1>{str}</h1>
        </div>
    )
}

export default TypingText;