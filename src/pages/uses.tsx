import React from "react";
import Image from "gatsby-image";
import { css } from "emotion";
import { StaticQuery, graphql } from "gatsby";
import {
  Layout,
  SEO,
  H1Line,
  Single,
  UnorderedList,
  ListItem
} from "$components";

const Uses = () => (
  <Layout>
    <SEO title="Leigh Halliday Uses" />

    <Single>
      <H1Line>What do I use?</H1Line>
      <p>
        Inspired by <a href="https://wesbos.com/uses">Wes Bos</a>, and cause
        every time I'm asked "Which theme do you use?" I have to look it up
        because I have no idea haha... here's a page to list the things I
        currently use for development.
      </p>

      <UnorderedList>
        <ListItem>
          <a href="https://code.visualstudio.com">Visual Studio Code</a> is the
          editor I use... love it!
        </ListItem>
        <ListItem>
          <a href="https://github.com/azemoh/vscode-one-monokai">One Monokai</a>{" "}
          is my VS Code theme
        </ListItem>
        <ListItem>
          <a href="https://fonts.google.com/specimen/Fira+Mono">Fira Mono</a> is
          the font used in VS Code
        </ListItem>
        <ListItem>
          <a href="https://www.iterm2.com">iTerm2</a> is the terminal I use with{" "}
          <a href="https://ohmyz.sh">Oh My ZSH</a> and the{" "}
          <a href="https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/robbyrussell.zsh-theme">
            Robby Russel
          </a>{" "}
          theme
        </ListItem>
      </UnorderedList>
    </Single>
  </Layout>
);

export default Uses;
