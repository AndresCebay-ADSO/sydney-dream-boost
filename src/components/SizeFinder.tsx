import { Shirt } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MeasurementsGuide } from "@/components/MeasurementsGuide";

interface SizeFinderProps {
  open: boolean;
  onClose: () => void;
}

export const SizeFinder = ({ open, onClose }: SizeFinderProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl flex items-center gap-2">
            <Shirt className="w-5 h-5 text-primary" />
            ¿Es para mí?
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <MeasurementsGuide />
        </div>
      </DialogContent>
    </Dialog>
  );
};
