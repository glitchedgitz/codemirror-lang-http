import { parser as httpParser } from "./syntax.grammar"
import {
  foldNodeProp,
  foldInside,
  indentNodeProp,
  LanguageSupport,
  LRLanguage,
} from '@codemirror/language';
import { styleTags, tags as t } from '@lezer/highlight';
import { parseMixed, Parser } from '@lezer/common';

import { html } from '@codemirror/lang-html';
import { json } from '@codemirror/lang-json';
import { javascript } from '@codemirror/lang-javascript';
import { xml } from '@codemirror/lang-xml';
import { css } from '@codemirror/lang-css';
import type { CompletionContext } from "@codemirror/autocomplete"
// import { graphqlLanguageSupport as graphql } from 'cm6-graphql';

const languageParsers: Record<string, Parser> = {
  ContentHTML: html().language.parser,
  ContentJSON: json().language.parser,
  ContentJavaScript: javascript().language.parser,
  ContentJS: javascript().language.parser,
  ContentXML: xml().language.parser,
  ContentCSS: css().language.parser,
  ContentUnknownSoJS: javascript().language.parser,
  // Some import error occur within the graphql package
  // ContentGraphQL: graphql().language.parser,
}

export const mixedParser = httpParser.configure({
  props: [
    styleTags({
      InvalidMethod: t.attributeName,
      Method: t.labelName,
      // HTTPVersion: t.annotation,
      // Version: t.annotation,
      // StatusCode: t.labelName,
      Status2xx: t.labelName,
      Status3xx: t.number,
      Status404: t.comment,
      Status4xx: t.definitionKeyword,
      Status5xx: t.propertyName,
      // HeaderName: t.propertyName,
      // HeaderName: t.,
      HeaderName: t.color,
      // HeaderValue: t.string,
      CookieHeaderName: t.attributeName,
      CookieName: t.number,
      CookieValue: t.string,
      UrlParamName: t.number,
      BodyParamName: t.number,
      UrlParamValue: t.string,
      BodyParamValue: t.string,
      Fragment: t.color
    })
  ],
  wrap: parseMixed((node) => {
    const parser = languageParsers[node.name];
    return parser ? { parser } : null;
  })
});

const mixedHTTP = LRLanguage.define({ parser: mixedParser });

const autoCompletion = mixedHTTP.data.of({
  autocomplete: autoComplete
})

import { syntaxTree } from "@codemirror/language"
import { Headers, Methods } from './autocomplete.js';

function autoComplete(context: CompletionContext) {
  const { state } = context;
  const nodeBefore = syntaxTree(state).resolveInner(context.pos, -1);
  const from = nodeBefore.from
  const pos = state.selection.main.head;
  switch (nodeBefore.name) {
    case "InvalidMethod":
      return { from: from, to: pos, options: Methods };
    case "HeaderName":
      return { from: from, to: pos, options: Headers };
  }
}


export function http() {
  return new LanguageSupport(mixedHTTP, [autoCompletion]);
}