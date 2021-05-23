import React,{useState, useEffect} from "react";
import { Translucent, Circle, Wrapper, Modal } from "./styled";
import './animations.css'


const Loading = ({show}) => {

  const [showLoading, setShowLoading] = useState(show)







  return (
    <Wrapper style={{display:show?'flex':'none'}}>
      <Translucent />
        <Modal className={`grow`}>
          <Circle className="rotate" />
        </Modal>
    </Wrapper>
  );
};

export default Loading;
