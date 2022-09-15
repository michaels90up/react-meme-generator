import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// At the end: styling the components
import { useState } from 'react';

function App() {
  const startImage =
    'https://api.memegen.link/images/sohappy/if_i_could_use_this_meme/i_would_be_so_happy.png?token=ofyj9zajvs2xujdwweic';
  const [topText, setTopText] = useState('Here could be');
  const [bottomText, setBottomText] = useState('your text!');
  const [image, setImage] = useState(startImage);

  return (
    <div className="App">
      <h1>Create your own meme!</h1>
      <div id="showMemes">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <img
            src={image}
            alt="user-created meme"
            data-test-id="meme-image"
            css={css`
              width: 400px;
              height: 400px;
            `}
          />
        </form>
      </div>
      <fieldset>
        <div id="userInputText">
          <label htmlFor="top">Top text: </label>
          <input
            name="top"
            value=""
            onChange={(event) => setTopText(event.currentTarget.value)}
          />
          <br />
          <br />
          <label htmlFor="bottom">Bottom text: </label>
          <input
            name="bottom"
            value=""
            onChange={(event) => setBottomText(event.currentTarget.value)}
          />
        </div>
        <br />
        <div id="userInputButton">
          <button>Download</button>
        </div>
      </fieldset>
    </div>
  );
}

export default App;
