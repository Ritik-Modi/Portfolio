import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FaFileDownload } from "react-icons/fa";


function ResumeDownloader() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/Resume.pdf";
    link.download = "Ritik-Modi-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Resume downloaded!");
  };

  return (
    <Button onClick={handleDownload} className="bg-box text-white hover:bg-box/50 ">
      <FaFileDownload />Resume
    </Button>
  );
}

export default ResumeDownloader;
