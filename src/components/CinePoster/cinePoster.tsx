import React from 'react';
import { ImageBackgroundProps } from 'react-native';

import { Container, Poster, Main, PosterName, Info, Average, Genres, Summary } from './styles';

interface ComponentProps extends ImageBackgroundProps {
  name: string;
  genres: Array<any>;
  summary: string;
  average: string|number;
}

function CinePoster({source, resizeMode, name, genres, summary, average}: ComponentProps) {

  function replaceHTMLFromSummary(text: string) {
    const newSummary = text.replace('<p>', '')
    .replace('<b>', '')
    .replace('</p>', '')
    .replace('</b>', '')

    if(newSummary.length <= 100) {
      return newSummary;
    }

    return `${newSummary.substring(0, 112)}...`;
  }

  summary = replaceHTMLFromSummary(summary);

  return(
    <Container>
      <Main>
          <Poster
            source={source}
            resizeMode={resizeMode}
          />
          <Info>
            <PosterName>
              {name}
            </PosterName>
            <Average>
              {average}
            </Average>
            <Genres>
              {genres.map(genre => (
                `${genre}, `
              ))}
            </Genres>
            <Summary>
              {summary}
            </Summary>
          </Info>
      </Main>
    </Container>  
  );
}

export default CinePoster;