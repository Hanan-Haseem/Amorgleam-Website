"use client"

import { useState } from "react"
import { ChevronDown, Download } from "lucide-react"

export default function ResearchSection() {
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null)

  const researchPapers = [
    {
      id: "paper-1",
      journal: "Clinical, Cosmetic and Investigational Dermatology",
      publisher: "Dovepress",
      title:
        "An antiaging skin care system containing alpha hydroxy acids and vitamins improves the biomechanical parameters of facial skin",
      type: "ORIGINAL RESEARCH",
      authors: ["Diana Tran", "Joshua P Townley", "Tanya M Barnes", "Kerryn A Greive"],
      date: "19 December 2014",
      description:
        "This study investigates the effects of an antiaging skin care system containing alpha hydroxy acids (AHAs) in conjunction with vitamins B3, C, and E on the biomechanical parameters of facial skin. Fifty two volunteers followed an antiaging skin care regimen for 21 days, showing significant improvements in wrinkle depth (Ry) and skin roughness (Ra) by 32.5% and 42.9%, respectively, as well as enhanced skin elasticity parameters.",
      pdfUrl: "/pdf1.pdf",
    },
    {
      id: "paper-2",
      journal: "Australasian Journal of Dermatology",
      publisher: "The Australasian College of Dermatologists",
      title: "Nicotinamide and the skin",
      type: "REVIEW ARTICLE",
      authors: ["Andrew C Chen", "Diona L Damian"],
      date: "2014",
      description:
        "Nicotinamide, an amide form of vitamin B3, boosts cellular energy and regulates poly-ADP-ribose-polymerase 1, an enzyme with important roles in DNA repair and the expression of inflammatory cytokines. Nicotinamide shows promise for the treatment of a wide range of dermatological conditions, including autoimmune blistering disorders, acne, rosacea, ageing skin and atopic dermatitis.",
      pdfUrl: "/pdf2.pdf",
    },
  ]

  return (
    <section id ="research" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
            Proven by Science
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-body">
            Each formulation is meticulously developed in Australia, guided by global skincare standards and
            supported by independent research.
          </p>
        </div>

        {/* Research Papers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white border border-border-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Paper Header */}
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-6 md:p-8 border-b border-border-light">
                <p className="text-primary-teal font-semibold text-sm mb-1">{paper.journal}</p>
                <p className="text-gray-500 text-xs mb-4">{paper.publisher}</p>
                <p className="text-[#1B7895] text-xs font-bold tracking-wide mb-3">
                  {paper.type}
                </p>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 leading-tight">
                  {paper.title}
                </h3>
                <div className="space-y-1 text-sm text-foreground/70">
                  <p>
                    <strong>Authors:</strong> {paper.authors.join(", ")}
                  </p>
                  <p>
                    <strong>Published:</strong> {paper.date}
                  </p>
                </div>
              </div>

              {/* Expandable Body */}
              <div className="p-6 md:p-8">
                <p className="text-foreground/70 text-base mb-6 leading-relaxed">
                  {paper.description}
                </p>

                {/* Toggle Button */}
                <button
                  onClick={() => setExpandedPaper(expandedPaper === paper.id ? null : paper.id)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group"
                >
                  <span className="font-semibold text-sm text-foreground">
                    {expandedPaper === paper.id ? "Hide Full Research" : "View Full Research"}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-primary-teal transition-transform group-hover:scale-110 ${
                      expandedPaper === paper.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* PDF Viewer + BLUE Download Button */}
                {expandedPaper === paper.id && (
                  <div className="mt-6 border rounded-lg overflow-hidden bg-gray-50">
                    <div className="h-96 md:h-[700px] bg-white">
                      <iframe
                        src={`${paper.pdfUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=1`}
                        className="w-full h-full border-0"
                        title={paper.title}
                        loading="lazy"
                      />
                    </div>

                    {/* BLUE DOWNLOAD BUTTON */}
                    <div className="p-4 bg-white border-t border-border-light flex justify-center">
                      <a
                        href={paper.pdfUrl}
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B7895] text-white font-semibold text-sm rounded-full hover:bg-[#156a85] transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        <Download size={16} />
                        Download PDF
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}