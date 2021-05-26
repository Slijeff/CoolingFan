import { useSelector } from "react-redux";

export default function Fan(){
    var speed = useSelector(state => state.speed);
    return(
        <div id="fan">
            <svg className={speed} t="1622022736570" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2866" width="200" height="200"><path d="M512 469.333333a42.666667 42.666667 0 0 0-42.666667 42.666667 42.666667 42.666667 0 0 0 42.666667 42.666667 42.666667 42.666667 0 0 0 42.666667-42.666667 42.666667 42.666667 0 0 0-42.666667-42.666667m21.333333-384c192 0 196.693333 152.32 96 202.666667-42.24 20.906667-61.013333 65.706667-69.12 105.386667 20.48 8.533333 38.4 21.76 52.053334 38.826666 157.866667-85.333333 327.68-51.626667 327.68 101.12 0 192-152.32 196.266667-202.666667 95.146667-21.333333-42.24-66.56-61.013333-106.24-69.12-8.533333 20.48-21.76 37.973333-38.826667 52.48 84.906667 157.44 51.2 326.826667-101.546666 326.826667-192 0-195.84-152.746667-95.146667-203.093334 41.813333-20.906667 60.586667-65.28 69.12-104.533333-20.906667-8.533333-39.253333-22.186667-52.906667-39.253333C254.293333 676.266667 85.333333 642.986667 85.333333 490.666667 85.333333 298.666667 237.226667 293.973333 287.573333 395.093333c21.333333 42.24 66.133333 60.586667 105.813334 68.693334 8.106667-20.48 21.76-38.4 39.253333-52.053334C347.733333 254.293333 381.44 85.333333 533.333333 85.333333z" fill="#16cdb6" p-id="2867" data-spm-anchor-id="a313x.7781069.0.i16" class="selected"></path></svg>
        </div>
    );
}