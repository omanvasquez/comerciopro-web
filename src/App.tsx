/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilitiesBento from './components/CapabilitiesBento';
import CurrencySimulator from './components/CurrencySimulator';
import ModuleExplorer from './components/ModuleExplorer';
import ComparisonSection from './components/ComparisonSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Navigation Top Bar Contract */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Bento Grid Capabilities & Modules */}
        <CapabilitiesBento />

        {/* Interactive BCV Multicurrency POS Simulator */}
        <CurrencySimulator />

        {/* Deep Dive Module Explorer */}
        <ModuleExplorer />

        {/* Operational Comparison */}
        <ComparisonSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Action CTA */}
        <CTASection />
      </main>

      {/* Quiet Structured Footer */}
      <Footer />
    </div>
  );
}
