import React from 'react';
import 'typeface-roboto';

import { storiesOf } from '@storybook/react';

import bg from '../src/media/HakanMaverick.jpeg';

const textImport = `import {componentName, anotherComponent} from '@andy-wynyard/maverick-react-component';`;

const divStyle = {
  position: 'relative',
  padding: '1000px;',
  fontFamily: 'Roboto'
};

const codeStyle = {
  backgroundColor: '#ccc'
};

storiesOf('Welcome to Maverick by Sigma', module).add(
  'React component repository',
  () => (
    <div style={divStyle}>
      <img
        style={{
          position: 'fixed',
          top: 0,
          zIndex: '-2',
          width: '100%'
        }}
        src={bg}
        alt="Background"
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '-1',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      />
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div
          style={{
            padding: '50px 20px',
            width: '100%',
            backgroundColor: 'rgba(255,255,255,0.8)',
            boxShadow: '0 0 5px white'
          }}>
          <h1 style={{ textAlign: 'center' }}>
            Guide for using Components from this source
          </h1>
          <h4 />

          <h3>Using Components</h3>

          <p>
            To use the components here, run:
            <pre>
              <code style={codeStyle}>
                npm i @andy-wynyard/maverick-react-component
              </code>
            </pre>
            The components will then be avaliable for import via:
            <pre>
              <code style={codeStyle}>{textImport}</code>
            </pre>
            The reason for the @ is because this is a private NPM repo, and it
            is as such scoped. You wont be able to access this if you have not
            been given access.
          </p>

          <p style={{ color: 'tomato' }}>
            The atomic design concept is used to organise these components.
          </p>

          <p>
            Components are build using{' '}
            <a href="https://www.styled-components.com/">
              <code style={codeStyle}>styled-components</code>
            </a>{' '}
            and the instructions for using each component are stored within the
            component's <code style={codeStyle}>NOTES</code> tab. Be sure to
            follow the guide within the notes, and pass the{' '}
            <code style={codeStyle}>props</code> correctly. All possible props
            will be listed there.
          </p>
          <p>
            If you are not familiar with{' '}
            <a href="https://www.styled-components.com/">
              <code style={codeStyle}>styled-components</code>
            </a>{' '}
            have a look and go from there, its pretty awesome.{' '}
          </p>

          <h3>Building Components</h3>
          <p>
            Please please add to this. If you make a component and think that
            there is a modicum of a possibility that this can be used again, add
            this here. Theres nothing worse than having a great component and
            having to rebuild it for no reason.
          </p>
          <p>
            That being said, make sure to create a PR for the creatioon of the
            component so that someone can have a look.
          </p>
          <p>
            When piublishing the reviewed component to NPM, make sure that you
            change the version number. It wont work otherwise.{' '}
          </p>

          <h3>List of TODO's for this:</h3>
          <ul>
            <li>
              <del>
                Host this somewhere to utilise Storybook's power (temp hosted on
                Andy's githubpages)
              </del>{' '}
              Now on netlify
            </li>
            <li>
              <del>
                Have a CI build automatically trigger a build to the static site
                on master merge.
              </del>{' '}
              When a master merge/push is made, a build process is run.
            </li>
            <li>
              Have a CI build automatically trigger publish to NPM on a master
              merge.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
);
