import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// At the end: styling the components
import { useState } from 'react';

function App() {
  const startImage =
    'https://api.memegen.link/images/sohappy/if_i_could_use_this_meme/i_would_be_so_happy.png?token=ofyj9zajvs2xujdwweic';
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [image, setImage] = useState(startImage);
  const [memeType, setMemeType] = useState('');

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
              width: 330px;
              height: 330px;
            `}
          />
        </form>
      </div>
      <br />
      <fieldset
        css={css`
          width: 400px;
          height: 170px;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
            sans-serif;
          background-color: #ddd1eb;
          padding: 10px;
          margin: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <div id="userInputText">
          <label htmlFor="top">Top text: </label>
          <input
            name="top"
            value={topText}
            onChange={(event) => setTopText(event.currentTarget.value)}
          />
          <br />
          <br />
          <label htmlFor="bottom">Bottom text: </label>
          <input
            name="bottom"
            value={bottomText}
            onChange={(event) => setBottomText(event.currentTarget.value)}
          />
          <br />
          <br />
          <label htmlFor="meme">Meme template: </label>
          <input
            name="meme"
            value={memeType}
            onChange={(event) => setMemeType(event.currentTarget.value)}
          />
        </div>
        <br />
        <div id="userInputButton">
          <button
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Download
          </button>
        </div>
      </fieldset>
    </div>
  );
}

export default App;
