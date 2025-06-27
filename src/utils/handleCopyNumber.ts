import { toast } from "sonner";

const handleCopyNumber = () => {
  navigator.clipboard
    .writeText("8619856363")
    .then(() => {
      toast.success("Number copied to clipboard!");
    })
    .catch((err) => {
      toast.warning("Failed to copy Number:", err);
    });
};

export default handleCopyNumber;
