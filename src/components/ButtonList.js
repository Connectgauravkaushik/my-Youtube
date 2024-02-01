import Button from "./Button";

const list = [""]

const ButtonList = () => {
    return ( 
        <div className="flex">
             <Button name="All" />
             <Button name="mixes" />
             <Button name="javascript" />
             <Button name="samsung" />
             <Button name="music" />
             <Button name="computers" />
             <Button name="Live" />
             <Button name="song" />
             <Button name="soccer" />
             <Button name="cricket" />
             <Button name="News" />
        </div>
     );
}
 
export default ButtonList;