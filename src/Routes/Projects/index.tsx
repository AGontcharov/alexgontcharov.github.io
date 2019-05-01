import React from 'react';

// Component
import ProjectContainer from './Components/ProjectContainer';

// Assets
import './projects.css';
import NotAvailable from '../../assets/img/NotAvailable.jpg';
import QlikImage from '../../assets/img/Qlik.png';
import DialogcImage from '../../assets/img/dialogc.png';
import WildebeestImage from '../../assets/img/wildebeest.png';
import ArtificalImage from '../../assets/img/artificialNeuralNetwork.jpg';
import GeneticAlgorithms from '../../assets/img/GeneticAlgorithms.png';

const Projects = () => {
  const projects = [
    {
      image: NotAvailable,
      imageAlt: 'Budget Tracker',
      name: 'Budget Tracker',
      sub: 'React, Redux, TypeScript, Material UI',
      description:
        'A budget tracker that integrates with RBC to help track your spending across categories and visualize it through charts.',
      githubLink: 'https://github.com/AGontcharov/budget-tracker'
    },
    {
      image: QlikImage,
      imageAlt: 'Qlik Project',
      name: 'Qlik Project',
      sub: 'MySQL, Express, AngularJS, Node.js',
      description:
        'My Qlik audition projet. A simple RESTful backend service that allows users to post, delete and check if a message is a palindrome. Also features simple user account creation and authentication.',
      githubLink: 'https://github.com/AGontcharov/Qlik-Project'
    },
    {
      image: DialogcImage,
      imageAlt: 'Dialog System Compiler Project',
      name: 'Dialog System Compiler',
      sub: 'C, Java, JNI, Makefile, Bash, Lex/Yacc',
      description:
        'Dialog System Compiler (Dialogc) is an IDE compiler which takes a simplified pre-determined language and spits out an executable Java GUI code which can be run directly in the IDE or as a stand alone program. Dialogc comes with 2 compile mode: IDE Compiler and Lex/Yacc Compiler.',
      githubLink: 'https://github.com/AGontcharov/Dialog-System-Compiler'
    },
    {
      image: WildebeestImage,
      imageAlt: 'Wildebeest 2 Player Chess AI Project',
      name: 'Wildebeest 2 Player Chess AI',
      sub: 'Python',
      description:
        'Wildebeest chess is a chess variant originally created by R. Wayne Schmittberger consisting of an 11x10 board along with a couple new peices. The Wildebeest 2 Player Chess AI generates all the possible states (moves) for a player as his next move through depth limited Minimax Search with Alpha-beta pruning.',
      githubLink: 'https://github.com/AGontcharov/Wildebeest-2-Player-Chess-AI'
    },
    {
      image: ArtificalImage,
      imageAlt: 'Artificial Neural Network Project',
      name: 'Artificial Neural Network',
      sub: 'Python',
      description:
        'An Artifical Neural Network implemented from scratch based on the neural structure of the human brain where features (set of input) from a trainning data file are sent to the input nodes of the neural network to train it. The neural network is then trained over a number of epochs adjusting the weights for its connections based on the actual output through forward and back propagation.',
      githubLink: 'https://github.com/AGontcharov/Artificial-Neural-Network'
    },
    {
      image: GeneticAlgorithms,
      imageAlt: 'Genetic Algorithms Project',
      name: 'Genetic Algorithms',
      sub: 'C, Makefile',
      description:
        'Implementation of a genetic algorithm written that optimizes arbitrary bit strings of sizes 8. Given a random starting population of octane bit strings a fitness function evaluates the number of set bits to determine the fitness value of each bit string (individual) and reach a solution.',
      githubLink: 'https://github.com/AGontcharov/Genetic-Algorithm'
    }
  ];

  return (
    <React.Fragment>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectContainer
          key={project.name}
          image={project.image}
          imageAlt={project.imageAlt}
          name={project.name}
          sub={project.sub}
          description={project.description}
          githubLink={project.githubLink}
        />
      ))}
    </React.Fragment>
  );
};

export default Projects;
