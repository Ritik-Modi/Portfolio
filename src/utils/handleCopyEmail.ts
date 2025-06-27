import { toast } from "sonner";

const handleCopyEmail = () => {
  navigator.clipboard
    .writeText("ritikmodi77@gmail.com")
    .then(() => {
      toast.success("Email copied to clipboard!");
    })
    .catch((err) => {
      toast.warning("Failed to copy email:", err);
    });
};

export default handleCopyEmail;
