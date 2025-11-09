function downloadPDF(){
  // Use the browser's print-to-PDF; hides UI elements via CSS @media print
  window.print();
}

// Small enhancement: keyboard shortcut (P) to print
document.addEventListener('keydown', function(e){
  if((e.key === 'p' || e.key === 'P') && (e.ctrlKey || e.metaKey) === false){
    // Prevent accidental prints if user uses Ctrl/Cmd+P for browser print
    downloadPDF();
  }
});
