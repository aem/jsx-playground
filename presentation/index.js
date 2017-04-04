// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import CodeSlide from 'spectacle-code-slide';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/overrides.css");


const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} theme={theme}>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JSX++
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={0.8} fit bold>
            Adam Markon<br />
            @amarkon88<br />
            github.com/aem/jsx-playground
          </Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example0.js')}
          ranges={[
            { loc: [0, 0], title: 'Example 0: React' },
            { loc: [0, 3] },
            { loc: [4, 7] },
            { loc: [8, 9] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example0-compiled.js')}
          ranges={[
            { loc: [0, 15], title: 'Example 0: React (Compiled)'},
            { loc: [5, 10] },
            { loc: [12, 15] }
          ]}
        />
        <Slide>
          <Image width={1000} src={require('../assets/example0.gif')} />
       </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example1.js')}
          ranges={[
            { loc: [0, 0], title: 'Example 1: Custom Pragma'},
            { loc: [0, 1] },
            { loc: [2, 5] },
            { loc: [6, 9] },
            { loc: [10, 11] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example1-compiled.js')}
          ranges={[
            { loc: [0, 0], title: 'Example 1: Compiled'},
            { loc: [3, 4] }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example2.js')}
          ranges={[
            { loc: [0, 0], title: 'Example 2: Nested Elements' },
            { loc: [0, 1] },
            { loc: [2, 8] },
            { loc: [9, 16] },
            { loc: [17, 18] }
          ]}
        />
        <Slide>
          <Image width={1000} src={require('../assets/example2.gif')} />
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('raw-loader!../assets/example5.js')}
          ranges={[
            { loc: [0, 0], title: 'Example 3: Modeling' },
            { loc: [2, 6] },
            { loc: [7, 8] },
            { loc: [28, 29] },
            { loc: [29, 32] },
            { loc: [33, 35] },
            { loc: [69, 85] },
            { loc: [86, 88] },
            { loc: [88, 98] },
            { loc: [98, 108] }
          ]}
        />
        <Slide>
          <Image width={1000} src={require('../assets/example5.gif')} />
        </Slide>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} italic lineHeight={1} textColor="secondary">
            fin
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
