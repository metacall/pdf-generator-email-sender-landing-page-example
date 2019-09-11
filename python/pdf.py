from fpdf import FPDF

def make_pdf(name):
  pdf = FPDF()
  pdf.add_page()
  pdf.set_font('Arial', 'B', 16)
  pdf.cell(40, 10, 'Hey There ' + name + " !")
  return pdf.output(dest= 'S')
