const string = `
.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.skin *::before,
.skin *::after {
  box-sizing: border-box;
}

.skin {
  background: #ffe600;
  min-height: 50vh;
  position: relative;
}

.nose {
  border-top: 8px solid #000000;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  position: absolute;
  top: 200px;
  left: 50%;
  margin-left: -10px;
}

.nose .arc {
  position: absolute;
  background-color: #000000;
  height: 5px;
  width: 20px;
  top: -13px;
  left: -10px;
  border-top-left-radius: 10px 5px;
  border-top-right-radius: 10px 5px;
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  67% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  animation: shake 250ms infinite linear;
}

.eye {
  border: 3px solid #000000;
  border-radius: 50%;
  height: 64px;
  width: 64px;
  position: absolute;
  top: 160px;
  left: 50%;
  margin-left: -32px;
  background: #2e2e2e;
}

.eye::after {
  content: "";
  display: block;
  border: 3px solid #000000;
  width: 32px;
  height: 32px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  left: 6px;
  top: -1px;
}

.eye.left {
  transform: translateX(-120px);
}

.eye.right {
  transform: translateX(120px);
}

.mouth {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  margin-left: -100px;
  top: 230px;
  overflow: hidden;
}

.mouth .up {
  position: relative;
  top: -3px;
  z-index: 1;
}

.mouth .up .lip {
  border: 3px solid #000000;
  border-top: none;
  width: 88px;
  height: 25px;
  position: absolute;
  top: 0;
  left: auto;
  background: #ffe600;
  box-shadow: 0 -10px 0 #ffe600;
}

.mouth .up .lip.left {
  border-right: none;
  border-bottom-left-radius: 44px 25px;
  transform: rotate(-25deg);
  right: 50%;
}

.mouth .up .lip.right {
  border-left: none;
  border-bottom-right-radius: 44px 25px;
  transform: rotate(25deg);
  left: 50%;
}

.mouth .down {
  width: 180px;
  height: 800px;
  border: 4px solid #000000;
  position: absolute;
  top: -630px;
  left: 50%;
  margin-left: -90px;
  border-radius: 50% 50%;
  background: #9b000a;
  overflow: hidden;
}

.mouth .down .tongue {
  width: 180px;
  height: 200px;
  position: absolute;
  bottom: -64px;
  left: 50%;
  margin-left: -90px;
  border-radius: 50%;
  background: #ff485f;
}

.face {
  position: absolute;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  left: 50%;
  top: 270px;
  margin-left: -44px;
  background: #ff0000;
}

.face.left {
  transform: translateX(-166px);
}

.face.right {
  transform: translateX(166px);
}
`

export default string