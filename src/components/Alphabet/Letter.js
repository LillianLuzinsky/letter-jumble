import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { animations } from "react-animation";

import A from './a'
import B from './b'
import C from './c'
import D from './d'
import E from './e'
import F from './f'
import G from './g'
import H from './h'
import I from './i'
import J from './j'
import K from './k'
import L from './l'
import M from './m'
import N from './n'
import O from './o'
import P from './p'
import Q from './q'
import R from './r'
import S from './s'
import T from './t'
import U from './u'
import V from './v'
import W from './w'
import X from './x'
import Y from './y'
import Z from './z'

const letterPool = {
  a: <A />,
  b: <B />,
  c: <C />,
  d: <D />,
  e: <E />,
  f: <F />,
  g: <G />,
  h: <H />,
  i: <I />,
  j: <J />,
  k: <K />,
  l: <L />,
  m: <M />,
  n: <N />,
  o: <O />,
  p: <P />,
  q: <Q />,
  r: <R />,
  s: <S />,
  t: <T />,
  u: <U />,
  v: <V />,
  w: <W />,
  x: <X />,
  y: <Y />,
  z: <Z />
};

export const Letter = ({ svg }) => (<div style={{animation: animations.popIn}}>{letterPool[svg]}</div>)

Letter.propTypes = {
  svg: PropTypes.string.isRequired
};

export const LetterContainer = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  width: 10vw;
  height: 10vh;
  cursor: pointer;

  :hover {
    stroke: white;
  }
`;