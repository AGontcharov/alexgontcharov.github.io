// @flow
import * as React from 'react';

// Component
import ProjectContainer from './Components/ProjectContainer';

// Assets
import './Projects.css';
import QlikImage from '../assets/img/Qlik.png';
import DialogcImage from '../assets/img/dialogc.png';
import WildebeestImage from '../assets/img/wildebeest.png';
import ArtificalImage from '../assets/img/artificialNeuralNetwork.jpg';

// To Do
// Rivals.GG Image
// Genetic Algorithms Image

type Props = {};

const Projects = (props: Props) => {
  return (
    <React.Fragment>
      <h1>Projects</h1>
      <ProjectContainer
        image="http://picolas.de/wp-content/uploads/2015/12/picolas-picture-not-available.jpg"
        imageAlt="Rivals.GG Project"
        name="Rivals.GG"
        sub="MySQL, Express, AngularJS, Node.js"
        description="Messing around with Riot Games API. Work in progress."
        githubLink="https://github.com/AGontcharov/Rivals.GG"
      />

      <ProjectContainer
        image={QlikImage}
        imageAlt="Qlik Project"
        name="Qlik Project"
        sub="MySQL, Express, AngularJS, Node.js"
        description="My Qlik audition projet. A simple RESTful backend service that allows users to post, delete and check if a message is a palindrome. Also features simple user account creation and authentication."
        githubLink="https://github.com/AGontcharov/Qlik-Project"
      />

      <ProjectContainer
        image={DialogcImage}
        imageAlt="Dialog System Compiler Project"
        name="Dialog System Compiler"
        sub="C, Java, JNI, Makefile, Bash, Lex/Yacc"
        description="Dialog System Compiler (Dialogc) is an IDE compiler which takes a simplified pre-determined language and spits out an executable Java GUI code which can be run directly in the IDE or as a stand alone program. Dialogc comes with 2 compile mode: IDE Compiler and Lex/Yacc Compiler."
        githubLink="https://github.com/AGontcharov/Dialog-System-Compiler"
      />

      <ProjectContainer
        image={WildebeestImage}
        imageAlt="Wildebeest 2 Player Chess AI Project"
        name="Wildebeest 2 Player Chess AI"
        sub="Python"
        description="Wildebeest chess is a chess variant originally created by R. Wayne Schmittberger consisting of an 11x10 board along with a couple new peices. The Wildebeest 2 Player Chess AI generates all the possible states (moves) for a player as his next move through depth limited Minimax Search with Alpha-beta pruning."
        githubLink="https://github.com/AGontcharov/Wildebeest-2-Player-Chess-AI"
      />

      <ProjectContainer
        image={ArtificalImage}
        imageAlt="Artificial Neural Network Project"
        name="Artificial Neural Network"
        sub="Python"
        description="An Artifical Neural Network implemented from scratch based on the neural structure of the human brain where features (set of input) from a trainning data file are sent to the input nodes of the neural network to train it. The neural network is then trained over a number of epochs adjusting the weights for its connections based on the actual output through forward and back propagation."
        githubLink="https://github.com/AGontcharov/Artificial-Neural-Network"
      />

      <ProjectContainer
        image="https://nnpdf.hepforge.org/images/GA.png"
        imageAlt="Genetic Algorithms Project"
        name="Genetic Algorithms"
        sub="C, Makefile"
        description="Implementation of a genetic algorithm written that optimizes arbitrary bit strings of sizes 8. Given a random starting population of octane bit strings a fitness function evaluates the number of set bits to determine the fitness value of each bit string (individual) and reach a solution."
        githubLink="https://github.com/AGontcharov/Genetic-Algorithm"
      />
    </React.Fragment>
  );
};

export default Projects;
