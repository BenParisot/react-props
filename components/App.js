import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
        <>
            <Header />
            <Dog name="Joe" age={5} weight="90 lbs" />
        </>
  );
}
