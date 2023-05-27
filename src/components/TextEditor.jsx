import React, { useContext, useEffect, useRef, useState } from 'react';

// * codemirror
import CodeMirror from 'codemirror';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/lib/codemirror.css';
import '../styles/Editor.css';

// * context
import { RegexCtx } from '../context/RegexContextProvider';

const TextEditor = () => {
  const editorRef = useRef(null);
  const editorInstance = useRef(null);
  const [text, setText] = useState('regex-it');
  const { regex, flags, flagsString, setMatchCount } = useContext(RegexCtx);
  const config = {
    value: text,
  };

  useEffect(() => {
    if (!editorRef.current || editorInstance.current) return;

    const editor = CodeMirror(editorRef.current, config);
    editorInstance.current = editor;
    editor.on('change', editor => setText(editor.getValue()));
  }, [editorRef.current, editorInstance.current]);

  useEffect(() => {
    if (!editorInstance.current || !regex) return;

    const editor = editorInstance.current;
    const doc = editor.getDoc();
    const marks = editor.getAllMarks();
    let searchRegex,
      marksCount = 0;

    if (marks && marks.length > 0) marks.forEach(marker => marker.clear());

    try {
      searchRegex = new RegExp(regex, flagsString);
    } catch (err) {
      return;
    }

    let cursor = editor.getSearchCursor(searchRegex);
    while (cursor.findNext()) {
      const from = cursor.from(),
        to = cursor.to();

      doc.markText(
        { line: from.line, ch: from.ch },
        { line: to.line, ch: to.ch },
        { className: 'highlighted-text' }
      );
      marksCount++;
    }

    setMatchCount(marksCount);
  }, [text, regex, flags, editorInstance.current]);

  return (
    <section className='text-editor-section overflow-hidden h-full pb-8'>
      <header className='section-header'>
        <h2 className='title font-semibold mb-2'>Test String</h2>
      </header>
      <div className='editor-container h-full border border-gray-300'>
        <div ref={editorRef} className='editor text-editor bg-red-200 h-full' />
      </div>
    </section>
  );
};

export default TextEditor;
