import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const VapiWidget: React.FC = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  useEffect(() => {
    // Load VAPI script if not already loaded
    if (!document.querySelector('script[src*="vapi-ai"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }

    // Remove existing widget if any
    const existingWidget = document.querySelector('vapi-widget');
    if (existingWidget) {
      existingWidget.remove();
    }

    // Create and configure widget based on language
    const widget = document.createElement('vapi-widget');

    // Common attributes
    widget.setAttribute('public-key', '57b4e621-6bc1-4f5f-b835-a4e4e36c2e91');
    widget.setAttribute('assistant-id', 'ee134da5-8f24-4442-9295-5592de54b8f3');
    widget.setAttribute('mode', 'chat');
    widget.setAttribute('theme', 'dark');
    widget.setAttribute('base-bg-color', '#000000');
    widget.setAttribute('accent-color', '#14B8A6');
    widget.setAttribute('cta-button-color', '#000000');
    widget.setAttribute('cta-button-text-color', '#ffffff');
    widget.setAttribute('border-radius', 'large');
    widget.setAttribute('size', 'full');
    widget.setAttribute('position', 'bottom-right');
    widget.setAttribute('voice-show-transcript', 'true');
    widget.setAttribute('consent-required', 'true');
    widget.setAttribute('consent-storage-key', 'vapi_widget_consent');

    // Language-specific attributes
    if (isEnglish) {
      widget.setAttribute('title', 'TALK TO AI');
      widget.setAttribute('start-button-text', 'Start');
      widget.setAttribute('end-button-text', 'End Call');
      widget.setAttribute('chat-first-message', 'Hello, how can I help you?');
      widget.setAttribute('chat-placeholder', 'Type your message...');
      widget.setAttribute('consent-title', 'Terms and conditions');
      widget.setAttribute('consent-content', 'By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service.');
    } else {
      widget.setAttribute('title', 'PRAAT MET AI');
      widget.setAttribute('start-button-text', 'Start');
      widget.setAttribute('end-button-text', 'Einde gesprek');
      widget.setAttribute('chat-first-message', 'Hallo, hoe kan ik je helpen?');
      widget.setAttribute('chat-placeholder', 'Typ je bericht...');
      widget.setAttribute('consent-title', 'Voorwaarden');
      widget.setAttribute('consent-content', 'Door op "Akkoord" te klikken, en elke keer dat ik interactie heb met deze AI-agent, stem ik in met de opname, opslag en het delen van mijn communicatie met externe serviceproviders, en zoals verder beschreven in onze Servicevoorwaarden.');
    }

    // Add widget to body
    document.body.appendChild(widget);

    // Cleanup function
    return () => {
      const widgetToRemove = document.querySelector('vapi-widget');
      if (widgetToRemove) {
        widgetToRemove.remove();
      }
    };
  }, [isEnglish]); // Re-run when language changes

  return null; // This component doesn't render anything visible
};

export default VapiWidget;