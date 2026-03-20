import { useState } from 'react'
import { Carbon, ArrowUpRight, LogoSlack } from '@carbon/icons-react'
import { Tabs, TabList, Tab, TabPanels, TabPanel, Accordion, AccordionItem, Grid, Column, Link, Tile, Button } from '@carbon/react'
import { Tearsheet } from '@carbon/ibm-products'
import './Home.scss'

function Home() {
  const [isRoadmapTearsheetOpen, setIsRoadmapTearsheetOpen] = useState(false)
  return (
    <>
    <Grid fullWidth condensed className="home-page">
      <Column sm={4} md={8} lg={{ span: 14, offset: 1 }}>
        <div className="home-page__content">
          <aside className="home-page__sidebar">
        <div className="home-page__sidebar-content">
          <Carbon size={48} className="home-page__icon" />
              <h1 className="home-page__title cds--type-fluid-quotation-02">Carbon <br/>Day</h1>
          <p className="home-page__subheading">
            Let's build the future of consumable software, together
          </p>
        </div>
            <footer className="home-page__footer">2026</footer>
          </aside>
          <main className="home-page__main">
          <div className="home-page__tabs-container">
            <Tabs>
              <TabList aria-label="Event sections" contained>
                <Tab>Agenda</Tab>
                <Tab>Resources</Tab>
                <Tab>Strategy</Tab>
                <Tab>Survey</Tab>
              </TabList>
              <TabPanels>
                <TabPanel className="agenda-tab-panel">
                  <div className="agenda-section">
                    <h2 className="agenda-section__title cds--type-heading-02">Roadmap & strategy</h2>
                    
                    <div className="agenda-item">
                      <div className="agenda-item__time">10:00am–10:45am</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading">The future of consumable software</h3>
                        <p className="agenda-item__description">Carbon's 2026 strategy</p>
                      </div>
                    </div>

                    <div className="agenda-item">
                      <div className="agenda-item__time">10:45am–11:00am</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading">Story: Building a Native Carbon Experience</h3>
                        <p className="agenda-item__description">Concert's Journey</p>
                      </div>
                    </div>

                    <div className="agenda-item agenda-item--break">
                      <div className="agenda-item__time">11:00am–11:15am</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading agenda-item__heading--italic">Break</h3>
                      </div>
                    </div>

                    <div className="agenda-item">
                      <div className="agenda-item__time">11:15am–12:00pm</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading">Recent Releases</h3>
                        <p className="agenda-item__description">– Carbon Autotrack</p>
                        <p className="agenda-item__description">– AI Chat</p>
                        <p className="agenda-item__description">– Page Header</p>
                        <p className="agenda-item__description">– What's new</p>
                        <p className="agenda-item__description">– Onboarding & first-time orientation</p>
                        <p className="agenda-item__description">– ... and more</p>
                      </div>
                    </div>

                    <div className="agenda-item">
                      <div className="agenda-item__time">12:00pm–1:00pm</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading">Open panel / QnA</h3>
                        <p className="agenda-item__description">Get all your questions answered by Carbon experts</p>
                      </div>
                    </div>

                    <h2 className="agenda-section__title cds--type-heading-02">Deep dives & hands-on labs</h2>

                    <div className="agenda-item agenda-item--break">
                      <div className="agenda-item__time">1:00pm–1:45pm</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading agenda-item__heading--italic">Lunch break</h3>
                      </div>
                    </div>

                    <div className="agenda-item">
                      <div className="agenda-item__time">1:45pm–2:00pm</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading">Accessible experiences with Carbon</h3>
                        <p className="agenda-item__description">Overview of accessibility compliance</p>
                      </div>
                    </div>

                    <div className="agenda-item">
                      <div className="agenda-item__time">2:00pm–3:00pm</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading">Zero to integrated: Accelerating workflows with Carbon MCP</h3>
                        <p className="agenda-item__description">Ship faster with AI connected Design, Dev, and PM Tools</p>
                      </div>
                    </div>

                    <div className="agenda-item">
                      <div className="agenda-item__time">3:00pm–3.15pm</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading">Carbon 101</h3>
                        <p className="agenda-item__description">Get to know the basics of Carbon</p>
                      </div>
                    </div>

                    <div className="agenda-item">
                      <div className="agenda-item__time">3.15pm–4pm</div>
                      <div className="agenda-item__content">
                        <h3 className="agenda-item__heading">Social breakout (Design & Development)</h3>
                        <p className="agenda-item__description">Hands-on discipline-focused conversation</p>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="resources-tab-panel">
                  <div className="resources-section">
                    <div className="resources-links">
                      <div className="resources-links__column">
                        <h2 className="resources-links__heading">Sites</h2>
                        <ul className="resources-links__list">
                          <li><a href="https://carbondesignsystem.com" className="resources-links__link">Carbondesignsystem.com</a></li>
                          <li><a href="https://carbondesignsystem.com/developing/frameworks/react" className="resources-links__link">Carbon for Products</a></li>
                          <li><a href="https://carbondesignsystem.com/contributing/get-started/overview/#carbon-labs" className="resources-links__link">Carbon Labs</a></li>
                          <li><a href="https://carbondesignsystem.com/contributing/get-started/overview/" className="resources-links__link">Contribution guide</a></li>
                          <li><a href="https://w3.ibm.com/w3publisher/ctr/corporate-technical-recognition-ctr/tcap/eligibility" className="resources-links__link">TCAP award info</a></li>
                        </ul>
                      </div>
                      <div className="resources-links__column">
                        <h2 className="resources-links__heading">
                          <LogoSlack size={20} className="resources-links__icon" />
                          Slack channels
                        </h2>
                        <ul className="resources-links__list">
                          <li><a href="https://ibm.enterprise.slack.com/archives/C0M053VPT" className="resources-links__link">#carbon-design-system</a></li>
                          <li><a href="https://ibm.enterprise.slack.com/archives/CQGR0HC05" className="resources-links__link">#carbon-for-ibmproducts</a></li>
                          <li><a href="https://ibm.enterprise.slack.com/archives/C0603LZUKRV" className="resources-links__link">#carbon-for-ai</a></li>
                          <li><a href="https://ibm.enterprise.slack.com/archives/C2K6RFJ1G" className="resources-links__link">#carbon-react</a></li>
                          <li><a href="https://ibm.enterprise.slack.com/archives/CL83LMKSA" className="resources-links__link">#carbon-web-components</a></li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="resources-tools">
                      <h2 className="resources-tools__heading">Tools</h2>
                      <Accordion>
                        <AccordionItem title="Carbon MCP">
                          <p className="accordion-content__text">
                            Carbon MCP (Model Context Protocol) is a powerful tool that brings Carbon Design System documentation and code examples directly into your AI-assisted development workflow. It enables AI assistants like Claude to access up-to-date Carbon resources, making it easier to build with Carbon components.
                          </p>
                          <h4 className="accordion-content__subheading">Why it's helpful:</h4>
                          <ul className="accordion-content__list">
                            <li><strong>For Developers:</strong> Get instant access to Carbon React component examples, props documentation, and implementation patterns without leaving your IDE. The MCP provides accurate, current code snippets and best practices.</li>
                            <li><strong>For Designers:</strong> Quickly reference design guidelines, accessibility standards, and component usage patterns to ensure your designs align with Carbon principles.</li>
                            <li><strong>Faster Development:</strong> Reduce context switching by having Carbon documentation available directly in your AI assistant conversations.</li>
                            <li><strong>Always Current:</strong> Access the latest Carbon documentation and examples without manually searching through multiple sites.</li>
                          </ul>
                          <h4 className="accordion-content__subheading">Getting Started:</h4>
                          <div className="accordion-content__actions">
                            <Link
                              href="https://carbondesignsystem.com/developing/carbon-mcp/overview/"
                              target="_blank"
                              rel="noopener noreferrer"
                              renderIcon={ArrowUpRight}
                            >
                              View onboarding guide
                            </Link>
                          </div>
                        </AccordionItem>
                        <AccordionItem title="Bob">
                          <p className="accordion-content__text">
                            Bob is an AI-powered coding assistant that integrates seamlessly with VS Code, providing intelligent code suggestions and automated development workflows specifically optimized for Carbon Design System projects.
                          </p>
                          <div className="accordion-content__actions">
                            <Link
                              href="https://internal.bob.ibm.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              renderIcon={ArrowUpRight}
                            >
                              View Project Bob
                            </Link>
                          </div>
                        </AccordionItem>
                        <AccordionItem title="Propel">
                          <p className="accordion-content__text">
                            More coming soon!
                          </p>
                        </AccordionItem>
                        <AccordionItem title="Figma Make">
                          <p className="accordion-content__text">
                            Figma Make is an AI-powered tool that helps designers and developers bridge the gap between design and code. It analyzes Figma designs and generates production-ready code using Carbon components.
                          </p>
                          <h4 className="accordion-content__subheading">Why it's helpful:</h4>
                          <ul className="accordion-content__list">
                            <li><strong>For Designers:</strong> Validate that your designs can be built with Carbon components before handoff to development.</li>
                            <li><strong>For Developers:</strong> Get a head start on implementation with AI-generated code that uses proper Carbon components and patterns.</li>
                            <li><strong>Faster Handoff:</strong> Reduce the time between design and development by automating the initial code generation.</li>
                            <li><strong>Carbon-Aware:</strong> Generates code that follows Carbon best practices and uses the correct component APIs.</li>
                          </ul>
                          <h4 className="accordion-content__subheading">Getting Started:</h4>
                          <div className="accordion-content__actions">
                                <div className="accordion-content__actions accordion-content__actions--stacked">
                                  <Link
                                    href="https://figma.com/make/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    renderIcon={ArrowUpRight}
                                  >
                                Visit Figma Make
                              </Link>
                              <Link
                                href="https://carbondesignsystem.com/developing/carbon-mcp/onboarding-and-setup/#step-3:-connecting-to-ibm-bob-and-other-mcp-clients"
                                target="_blank"
                                rel="noopener noreferrer"
                                renderIcon={ArrowUpRight}
                              >
                                Configure Carbon MCP with Figma Make
                              </Link>
                            </div>
                            <Link
                              href="https://carbondesignsystem.com/developing/carbon-mcp/onboarding-and-setup/#step-3:-connecting-to-ibm-bob-and-other-mcp-clients"
                              target="_blank"
                              rel="noopener noreferrer"
                              renderIcon={ArrowUpRight}
                            >
                              Configure Carbon MCP with Figma Make
                            </Link>
                          </div>
                        </AccordionItem>
                        <AccordionItem title="Other relevant tools">
                          <p className="accordion-content__text">
                            Additional tools to enhance your Carbon Design System workflow:
                          </p>
                          <ul className="accordion-content__list">
                            <li><strong>Carbon Design Kit:</strong> Figma and Sketch libraries with all Carbon components and patterns. <a href="https://carbondesignsystem.com/designing/design-resources/" className="accordion-content__link" target="_blank" rel="noopener noreferrer">View design resources</a></li>
                            <li><strong>Carbon DevTools:</strong> Browser extension for inspecting Carbon components in your applications. <a href="https://github.com/carbon-design-system/devtools" className="accordion-content__link" target="_blank" rel="noopener noreferrer">View on GitHub</a></li>
                            <li><strong>Storybook:</strong> Interactive component explorer for Carbon React components. <a href="https://react.carbondesignsystem.com/" className="accordion-content__link" target="_blank" rel="noopener noreferrer">Explore components</a></li>
                          </ul>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="strategy-tab-panel">
                  <div className="strategy-section">
                    <Grid condensed>
                      <Column sm={4} md={8} lg={16}>
                        <h2 className="strategy-section__title">Carbon's strategic investment pillars</h2>
                        <p className="strategy-section__description">
                          Carbon is stepping into a new era of design system maturity. An era defined by intelligent assistance, unified experiences, and a bold reimagining of our visual and technical foundations. This strategy is anchored in four investment pillars that work together to accelerate application, elevate quality, and position the company for the next decade of product innovation at scale.
                        </p>
                      </Column>
                    </Grid>

                    <Grid condensed className="strategy-pillars">
                      <Column sm={4} md={4} lg={6}>
                        <Tile className="strategy-pillar">
                          <h3 className="strategy-pillar__title">Find</h3>
                          <p className="strategy-pillar__description">
                            Elevate discoverability across every Carbon site, reducing wasted effort and empowering makers to move faster with confidence
                          </p>
                        </Tile>
                      </Column>
                      <Column sm={0} md={0} lg={1} />
                      <Column sm={4} md={4} lg={6}>
                        <Tile className="strategy-pillar">
                          <h3 className="strategy-pillar__title">Guide</h3>
                          <p className="strategy-pillar__description">
                            Deliver actionable guidance, composability gains, and AI patterns that empower makers to build with clarity, confidence, and momentum
                          </p>
                        </Tile>
                      </Column>
                      <Column sm={4} md={4} lg={6}>
                        <Tile className="strategy-pillar">
                          <h3 className="strategy-pillar__title">Assist</h3>
                          <p className="strategy-pillar__description">
                            Infuse Carbon with AI to elevate skilled makers, boosting accuracy, quality, speed, and innovation across every workflow
                          </p>
                        </Tile>
                      </Column>
                      <Column sm={0} md={0} lg={1} />
                      <Column sm={4} md={4} lg={6}>
                        <Tile className="strategy-pillar">
                          <h3 className="strategy-pillar__title">Emerge</h3>
                          <p className="strategy-pillar__description">
                            Materialize Carbon v12, reimagining the design system as modern, expressive, and AI-ready to elevate IBM's brand
                          </p>
                        </Tile>
                      </Column>
                    </Grid>

                    <Grid condensed>
                      <Column sm={4} md={8} lg={16}>
                        <Link
                          href="#"
                          className="strategy-section__link"
                          onClick={(e) => {
                            e.preventDefault()
                            setIsRoadmapTearsheetOpen(true)
                          }}
                        >
                          View Carbon's roadmap
                        </Link>
                      </Column>
                    </Grid>
                  </div>
                </TabPanel>
                <TabPanel className="survey-tab-panel">
                  <div className="survey-section">
                    <Grid condensed>
                      <Column sm={4} md={8} lg={16}>
                        <h2 className="survey-section__title">Help shape the next Carbon Day!</h2>
                        <p className="survey-section__description">
                          Your perspective is essential. If you have just a moment, please share your thoughts in our quick survey. Your ideas, preferences, and feedback will directly influence future Carbon Days as well as Carbon overall.
                        </p>
                        <Link href="https://your.feedback.ibm.com/jfe/form/SV_6qUJWWGjZ2qdfUi" target="_blank" rel="noopener noreferrer" className="survey-section__link">Take the survey</Link>
                      </Column>
                    </Grid>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
            </div>
          </main>
        </div>
      </Column>
    </Grid>

    <Tearsheet
      open={isRoadmapTearsheetOpen}
      onClose={() => setIsRoadmapTearsheetOpen(false)}
      title="Carbon's roadmap"
      label="2026"
      size="wide"
      className="roadmap-tearsheet"
    >
      <div className="roadmap-tearsheet__header">
        <p className="roadmap-tearsheet__disclaimer">
          All information being released represents Carbon's current intent, is subject to change, and expresses only goals
        </p>
      </div>

      <div className="roadmap-tearsheet__content">
        <div className="roadmap-table">
          <div className="roadmap-table__header">
            <div className="roadmap-table__cell roadmap-table__cell--header roadmap-table__cell--pillar">Pillar</div>
            <div className="roadmap-table__cell roadmap-table__cell--header">Q1 2026</div>
            <div className="roadmap-table__cell roadmap-table__cell--header">Q2 2026</div>
            <div className="roadmap-table__cell roadmap-table__cell--header">Q3 2026</div>
            <div className="roadmap-table__cell roadmap-table__cell--header">Q4 2026</div>
          </div>

          {/* Find Row */}
          <div className="roadmap-table__row">
            <div className="roadmap-table__cell roadmap-table__cell--pillar">
              <h4 className="roadmap-table__pillar-title">Find</h4>
              <p className="roadmap-table__pillar-description">
                Elevate discoverability across every Carbon site, reducing wasted effort and empowering makers to move faster with confidence
              </p>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q1">
              <h5 className="roadmap-table__item-title">Build the new site foundation for clarity</h5>
              <ul className="roadmap-table__list">
                <li>CMS multi-tenancy foundation enables content owners to populate guidance aligned to the new site architecture</li>
                <li>Establish a scalable structure that supports consistent, findable content</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q2">
              <h5 className="roadmap-table__item-title">Public preview: Invite the community in</h5>
              <ul className="roadmap-table__list">
                <li>Public preview of the new site available for opt-in use across internal teams and the open-source community</li>
                <li>Gather insights to refine navigation and site structure</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q3">
              <h5 className="roadmap-table__item-title">GA: New carbondesignsystem.com</h5>
              <ul className="roadmap-table__list">
                <li>New site consolidating resources into an all-in-one platform</li>
                <li>Streamlined guidance and tooling make the Carbon easier to consume than ever before</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q4">
              <h5 className="roadmap-table__item-title">Accelerate TTM w/ advanced capability</h5>
              <ul className="roadmap-table__list">
                <li>Advanced search and AI-assisted guidance elevate site findability and confidence</li>
                <li>Faster answers, fewer dead ends, and a more intuitive path from question to solution</li>
              </ul>
            </div>
          </div>

          {/* Guide Row */}
          <div className="roadmap-table__row">
            <div className="roadmap-table__cell roadmap-table__cell--pillar">
              <h4 className="roadmap-table__pillar-title">Guide</h4>
              <p className="roadmap-table__pillar-description">
                Deliver actionable guidance, composability gains, and AI patterns that empower makers to build with clarity, confidence, and momentum
              </p>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q1">
              <h5 className="roadmap-table__item-title">Extend the design system</h5>
              <ul className="roadmap-table__list">
                <li>Layout modules proof-of-concept demonstrates the experience vision and technical path for scale</li>
                <li>New onboarding resources to equip customers with clear, actionable guidance that accelerates time-to-value</li>
                <li>Solis / Sidekick integration of Carbon AI Chat</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q2">
              <h5 className="roadmap-table__item-title">Strengthen the design system</h5>
              <ul className="roadmap-table__list">
                <li>Density enhancements supporting both open and compact layout needs</li>
                <li>Composability improvements to high-use components enabling more flexible configurations</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q3">
              <h5 className="roadmap-table__item-title">Achieve full framework parity</h5>
              <ul className="roadmap-table__list">
                <li>Full web-component parity with React, ensuring a unified, predictable experience across implementation paths</li>
                <li>Carbon AI Chat usage guidance published</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q4">
              <h5 className="roadmap-table__item-title">Elevate developer experience</h5>
              <ul className="roadmap-table__list">
                <li>Improve documentation workflows, making it easier to move from concept to working code</li>
                <li>Code becomes the authoritative truth across all guidance, ensuring documentation always reflects reality</li>
              </ul>
            </div>
          </div>

          {/* Assist Row */}
          <div className="roadmap-table__row">
            <div className="roadmap-table__cell roadmap-table__cell--pillar">
              <h4 className="roadmap-table__pillar-title">Assist</h4>
              <p className="roadmap-table__pillar-description">
                Infuse Carbon with AI to elevate skilled makers, boosting accuracy, quality, speed, and innovation across every workflow
              </p>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q1">
              <h5 className="roadmap-table__item-title">GA: Carbon MCP</h5>
              <ul className="roadmap-table__list">
                <li>Provide AI-powered access to the full Carbon knowledge base</li>
                <li>Enable makers to move from design intent to production-ready code with dramatically reduced friction</li>
                <li>Launch a discovery phase focused on the intersection of the design system, personalization, and generative UI</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q2">
              <h5 className="roadmap-table__item-title">Expand AI coverage</h5>
              <ul className="roadmap-table__list">
                <li>Publish guidance + tooling for MCP apps with Carbon</li>
                <li>Web-component mode for Bob to enable design-system usage across all supported frameworks</li>
                <li>Carbon MCP to support Charts and TanStack, extending AI assistance across broader Carbon packages</li>
                <li>Influence Carbon MCP + Figma Make use</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q3">
              <h5 className="roadmap-table__item-title">Transform migration w/ AI acceleration</h5>
              <ul className="roadmap-table__list">
                <li>Employ Carbon MCP to accelerate product teams' path to full Carbon adoption</li>
                <li>Public preview signal framework, demonstrating a scalable path toward generative UI</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q4">
              <h5 className="roadmap-table__item-title">Unlock emerging MCP use-cases</h5>
              <ul className="roadmap-table__list">
                <li>Carbon MCP latency improvements</li>
                <li>Assess Bob + Figma Make frameworks</li>
                <li>Refine prompt guidance and libraries</li>
                <li>GA new framework, enabling dynamic personalization that adapts experiences to individual needs</li>
              </ul>
            </div>
          </div>

          {/* Emerge Row */}
          <div className="roadmap-table__row">
            <div className="roadmap-table__cell roadmap-table__cell--pillar">
              <h4 className="roadmap-table__pillar-title">Emerge</h4>
              <p className="roadmap-table__pillar-description">
                Materialize Carbon v12, reimagining the design system as modern, expressive, and AI-ready to elevate IBM's brand
              </p>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q1">
              <h5 className="roadmap-table__item-title">Ignite the v12 vision</h5>
              <ul className="roadmap-table__list">
                <li>Kick off with cross-functional alignment across brand, product, and system teams</li>
                <li>Metablabs to conduct divergent visual explorations to push the boundaries of expression and modernity</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q2">
              <h5 className="roadmap-table__item-title">Align intent and reveal the v12 future</h5>
              <ul className="roadmap-table__list">
                <li>Establish v12 design intent with brand and product partners</li>
                <li>Offer the internal community a first look at the evolving visual expression</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q3">
              <h5 className="roadmap-table__item-title">Build experimental v12 foundations</h5>
              <ul className="roadmap-table__list">
                <li>Release the first experimental v12 theme (Wave 1), with feature-flagged components ready for early adopters</li>
                <li>Expand experimental libraries (Motion, Streaming, AI recipes, Layouts, etc) to showcase the expressive and adaptive capabilities of the next generation</li>
              </ul>
            </div>
            <div className="roadmap-table__cell" data-quarter="Q4">
              <h5 className="roadmap-table__item-title">Prepare for v12 scale + personalization</h5>
              <ul className="roadmap-table__list">
                <li>Release (Wave 2), expanding feature-flag coverage for early adopter teams</li>
                <li>Achieve v12 readiness for scale, entering the queue for early 2027 v12 release</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Tearsheet>
    </>
  )
}

export default Home

// Made with Bob
