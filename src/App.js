// App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Element } from 'react-scroll';
import theme from './theme';
import Header from './components/Header';
import BackgroundVideo from './components/BackgroundVideo';
import Section from './components/Section';
import logo from './assets/logo-no-background.png';
import aboutUsImage from './assets/about-us.jpg';
import operatorImage from './assets/operator.jpg';
import brokerOwnerImage from './assets/broker-owner.jpg';

function App() {
  const sections = [
    { name: 'about-us', title: 'About Us', imageUrl: aboutUsImage, body: 'Our platform is built on the foundation of over 25 years of Project Management experience, specifically tailored to address the nuanced challenges of transportation and hauling in Project Management. Designed by seasoned professionals, our application offers unparalleled granularity in tracking, providing fact-driven reports and real-time updates that are designed to significantly reduce labor and improve efficiency. By integrating our app into your project management strategy, you gain access to a suite of tools that streamline daily transportation tasks, assisting your projects to stay on schedule and within budget.' },
    { name: 'operator', title: 'Operator', imageUrl: operatorImage, body: 'For Independent Transport Operators (ITOs), our application is a game-changer. Our app can be used to settle disputes over hours worked, mitigate delayed payments, and lessen the hassle of finding projects in your preferred locales. Our app provides the back-up documentation for your invoices which can be reconciled as often as daily, identifying any discrepancies, and laying the groundwork so that you&#39;re paid promptly for your services. The platform&#39;s intuitive design allows for easy location of projects, making it simpler than ever to manage your workload and optimize your routes for maximum efficiency.' },
    { name: 'broker-owner', title: 'Broker/Owner', imageUrl: brokerOwnerImage, body: 'Brokers and Project Owners, our application is designed to revolutionize how you manage transportation and hauling tasks within your projects. With our app, you can reconcile costs daily, update project specifics in real-time, and confirm project needs nearly effortlessly. This level of efficiency minimizes the time between discrepancy identification and dispute settlement, targeting smooth project progression and accurate budget tracking. The app&#39;s features are crafted to enhance your daily operations, making it an indispensable tool for anyone looking to streamline their Project Management processes.' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BackgroundVideo />
      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} /> {/* Adjust size as needed */}
      </div>
      {sections.map((section, index) => (
        <Element key={section.name} name={section.name} className="element">
          <Section title={section.title} imageUrl={section.imageUrl} isOdd={index % 2 !== 0} body={section.body} />
        </Element>
      ))}
      {/* <Element name="contact" className="element" style={{ height: '500px' }}>Contact Section</Element> */}
    </ThemeProvider>
  );
}

export default App;
