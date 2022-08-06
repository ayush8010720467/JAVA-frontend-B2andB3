import './Setting.css'
import Button from '../Button/Button';
import { useRef, useState } from 'react';

function Setting(props){
    // const [initialBgColor, setColor] = useState(props.initialBgColor);
    const colorPickerRef = useRef(null);
    const onSaveSetting = ()=>{
        props.changeBackground(colorPickerRef.current.value);
    }
    return (
      <div className="settingPage">
        <div className="setting-body">
          <span>Please Add the Background Color</span>
          <input type="color" ref={colorPickerRef}/>
        </div>
        <div className="setting-footer">
          <Button
            handleClick={onSaveSetting}
            stylingClass={"btn btn-save m-r-30 m-l-30"}
          >
            Save
          </Button>
          <Button
            handleClick={props.onClose}
            stylingClass={"btn btn-close m-r-30"}
          >
            Close
          </Button>
        </div>
      </div>
    );
}
export default Setting;