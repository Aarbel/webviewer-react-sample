import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';

const App = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: 'https://development-clovis-files.s3.eu-central-1.amazonaws.com/5d9e9c17-50ca-4831-9517-4b0513e55903/source.pdf',
        // Removing webviewerServerURL will remove any problems with page dimensions differences
        // between ipad and normal browsers
        webviewerServerURL: 'http://localhost:8090',
      },
      viewer.current,
    ).then((instance) => {
      const { documentViewer } = instance.Core;

      documentViewer.addEventListener('documentLoaded', () => {
        const width = instance.Core.documentViewer.getPageWidth(1);
        console.log("documentViewer.getPageWidth(1):", width);
        alert(`Width: ${width} for Page 1`)
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
