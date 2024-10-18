'use client';

const ResumeIframeViewer = () => {
  return (
    <div className="w-full h-[85vh] p-4">
      <iframe
        src="https://raw.githubusercontent.com/smbock42/resume/main/resume.pdf"
        width="100%"
        height="100%"
        // title="Resume PDF Viewer"
      >
        <p>
          Alternative text - include a link
          <a href="https://raw.githubusercontent.com/smbock42/resume/main/resume.pdf">to the PDF!</a>
        </p>
      </iframe>
    </div>
  );
};

export default ResumeIframeViewer;