import { useState } from "react";
import { X, Ruler, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

interface SizeFinderProps {
  open: boolean;
  onClose: () => void;
  onSizeSelect: (size: string) => void;
}

type FitPreference = "ajustada" | "normal" | "holgada";

export const SizeFinder = ({ open, onClose, onSizeSelect }: SizeFinderProps) => {
  const [step, setStep] = useState(1);
  const [sex, setSex] = useState<"M" | "F" | "">("");
  const [height, setHeight] = useState([170]);
  const [weight, setWeight] = useState([70]);
  const [fit, setFit] = useState<FitPreference>("normal");
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);

  const calculateSize = () => {
    const h = height[0];
    const w = weight[0];
    const bmi = w / ((h / 100) ** 2);
    
    let baseSize: string;
    
    // Base size calculation
    if (bmi < 18.5) {
      baseSize = h < 165 ? "XS" : h < 175 ? "S" : "M";
    } else if (bmi < 25) {
      baseSize = h < 160 ? "S" : h < 170 ? "M" : h < 180 ? "L" : "XL";
    } else if (bmi < 30) {
      baseSize = h < 165 ? "M" : h < 175 ? "L" : "XL";
    } else {
      baseSize = h < 170 ? "L" : h < 180 ? "XL" : "XXL";
    }

    // Adjust for fit preference
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const currentIndex = sizes.indexOf(baseSize);
    
    if (fit === "ajustada" && currentIndex > 0) {
      baseSize = sizes[currentIndex - 1];
    } else if (fit === "holgada" && currentIndex < sizes.length - 1) {
      baseSize = sizes[currentIndex + 1];
    }

    // Gender adjustment
    if (sex === "F" && currentIndex > 0) {
      baseSize = sizes[Math.max(0, sizes.indexOf(baseSize) - 1)];
    }

    setRecommendedSize(baseSize);
    setStep(4);
  };

  const handleUseSize = () => {
    if (recommendedSize) {
      onSizeSelect(recommendedSize);
      handleReset();
      onClose();
    }
  };

  const handleReset = () => {
    setStep(1);
    setSex("");
    setHeight([170]);
    setWeight([70]);
    setFit("normal");
    setRecommendedSize(null);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl flex items-center gap-2">
            <Ruler className="w-5 h-5 text-primary" />
            Encontrar mi talla
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {/* Progress indicator */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  s <= step ? "bg-primary" : "bg-secondary"
                }`}
              />
            ))}
          </div>

          {/* Step 1: Sex */}
          {step === 1 && (
            <div className="space-y-6">
              <p className="text-muted-foreground">¿Cuál es tu sexo biológico?</p>
              <RadioGroup value={sex} onValueChange={(v) => setSex(v as "M" | "F")}>
                <div className="grid grid-cols-2 gap-4">
                  <Label
                    htmlFor="male"
                    className={`flex items-center justify-center p-6 rounded-xl border cursor-pointer transition-all ${
                      sex === "M" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="M" id="male" className="sr-only" />
                    <span className="font-medium">Masculino</span>
                  </Label>
                  <Label
                    htmlFor="female"
                    className={`flex items-center justify-center p-6 rounded-xl border cursor-pointer transition-all ${
                      sex === "F" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="F" id="female" className="sr-only" />
                    <span className="font-medium">Femenino</span>
                  </Label>
                </div>
              </RadioGroup>
              <Button 
                onClick={() => setStep(2)} 
                disabled={!sex}
                className="w-full bg-primary text-primary-foreground hover:bg-gold-light"
              >
                Continuar
              </Button>
            </div>
          )}

          {/* Step 2: Height */}
          {step === 2 && (
            <div className="space-y-6">
              <p className="text-muted-foreground">¿Cuál es tu altura?</p>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="font-display text-4xl font-bold text-gradient-gold">{height[0]}</span>
                  <span className="text-muted-foreground ml-2">cm</span>
                </div>
                <Slider
                  value={height}
                  onValueChange={setHeight}
                  min={140}
                  max={210}
                  step={1}
                  className="[&_[role=slider]]:bg-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>140 cm</span>
                  <span>210 cm</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Atrás
                </Button>
                <Button onClick={() => setStep(3)} className="flex-1 bg-primary text-primary-foreground hover:bg-gold-light">
                  Continuar
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Weight & Fit */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-4">¿Cuál es tu peso?</p>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="font-display text-4xl font-bold text-gradient-gold">{weight[0]}</span>
                    <span className="text-muted-foreground ml-2">kg</span>
                  </div>
                  <Slider
                    value={weight}
                    onValueChange={setWeight}
                    min={40}
                    max={150}
                    step={1}
                    className="[&_[role=slider]]:bg-primary"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>40 kg</span>
                    <span>150 kg</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-muted-foreground mb-4">¿Cómo prefieres el ajuste?</p>
                <RadioGroup value={fit} onValueChange={(v) => setFit(v as FitPreference)}>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "ajustada", label: "Ajustada" },
                      { value: "normal", label: "Normal" },
                      { value: "holgada", label: "Holgada" },
                    ].map((option) => (
                      <Label
                        key={option.value}
                        htmlFor={option.value}
                        className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all text-sm ${
                          fit === option.value ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                        <span className="font-medium">{option.label}</span>
                      </Label>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Atrás
                </Button>
                <Button onClick={calculateSize} className="flex-1 bg-primary text-primary-foreground hover:bg-gold-light">
                  Ver mi talla
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Result */}
          {step === 4 && recommendedSize && (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-12 h-12 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground mb-2">Tu talla recomendada es</p>
                <span className="font-display text-6xl font-bold text-gradient-gold">{recommendedSize}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Basado en tus medidas y preferencia de ajuste {fit}.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleReset} className="flex-1">
                  Calcular de nuevo
                </Button>
                <Button onClick={handleUseSize} className="flex-1 bg-primary text-primary-foreground hover:bg-gold-light">
                  Usar talla {recommendedSize}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
