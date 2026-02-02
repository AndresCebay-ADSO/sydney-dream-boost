import { useState } from "react";
import { Check, Package, MapPin, Phone, User, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { z } from "zod";

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
  onOrderComplete: () => void;
}

export interface OrderData {
  name: string;
  phone: string;
  address: string;
  city: string;
  quantity: number;
}

const UNIT_PRICE = 120000;

const orderSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres").max(100),
  phone: z.string().min(10, "Ingresa un número de teléfono válido").max(15),
  address: z.string().min(10, "Ingresa una dirección completa").max(200),
  city: z.string().min(3, "Ingresa una ciudad válida").max(50),
});

export const OrderModal = ({ open, onClose, onOrderComplete }: OrderModalProps) => {
  const [step, setStep] = useState<"form" | "confirm" | "success">("form");
  const [formData, setFormData] = useState<OrderData>({
    name: "",
    phone: "",
    address: "",
    city: "",
    quantity: 1,
  });

  const totalPrice = formData.quantity * UNIT_PRICE;
  const formattedTotalPrice = totalPrice.toLocaleString('es-CO');

  const handleQuantityChange = (delta: number) => {
    setFormData(prev => ({
      ...prev,
      quantity: Math.max(1, Math.min(10, prev.quantity + delta))
    }));
  };
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof OrderData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    try {
      orderSchema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach(e => {
          if (e.path[0]) {
            newErrors[e.path[0] as string] = e.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setStep("confirm");
    }
  };

  const handleConfirm = () => {
    onOrderComplete();
    setStep("success");
  };

  const handleClose = () => {
    setStep("form");
    setFormData({ name: "", phone: "", address: "", city: "", quantity: 1 });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl flex items-center gap-2">
            {step === "form" && (
              <>
                <Package className="w-5 h-5 text-primary" />
                Datos de envío
              </>
            )}
            {step === "confirm" && (
              <>
                <AlertCircle className="w-5 h-5 text-primary" />
                Confirmar pedido
              </>
            )}
            {step === "success" && (
              <>
                <Check className="w-5 h-5 text-primary" />
                ¡Pedido realizado!
              </>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {/* Form Step */}
          {step === "form" && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary border border-border">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Producto</span>
                  <span className="font-medium">Camiseta Team Tincho</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-muted-foreground">Talla</span>
                  <span className="font-medium text-primary">Única</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-muted-foreground">Precio unitario</span>
                  <span className="font-medium">$120.000 COP</span>
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="text-muted-foreground">Cantidad</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={formData.quantity <= 1}
                      className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-lg font-bold hover:bg-primary/10 hover:border-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      −
                    </button>
                    <span className="font-bold text-lg w-6 text-center">{formData.quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(1)}
                      disabled={formData.quantity >= 10}
                      className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-lg font-bold hover:bg-primary/10 hover:border-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Total Price */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-foreground font-medium">Total</span>
                  <span className="font-bold text-xl text-gradient-gold">${formattedTotalPrice} COP</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Tu nombre completo"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="300 123 4567"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="city" className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    Ciudad
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Tu ciudad"
                    className={errors.city ? "border-destructive" : ""}
                  />
                  {errors.city && <p className="text-destructive text-sm mt-1">{errors.city}</p>}
                </div>

                <div>
                  <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    Dirección completa
                  </Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Calle, número, barrio, referencias"
                    className={errors.address ? "border-destructive" : ""}
                  />
                  {errors.address && <p className="text-destructive text-sm mt-1">{errors.address}</p>}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Flujo de compra:</strong> Pedido → Coordinación → Confirmación de pago → Envío
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Envío GRATIS</strong> en La Plata, Huila. Otras ciudades: costo a cargo del cliente.
                </p>
              </div>

              <Button 
                onClick={handleSubmit}
                className="w-full bg-primary text-primary-foreground hover:bg-gold-light font-display font-semibold"
              >
                Continuar
              </Button>
            </div>
          )}

          {/* Confirm Step */}
          {step === "confirm" && (
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Por favor verifica que tus datos sean correctos antes de confirmar el pedido.
              </p>

              <div className="space-y-3 p-4 rounded-lg bg-secondary border border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nombre</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">WhatsApp</span>
                  <span className="font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ciudad</span>
                  <span className="font-medium">{formData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dirección</span>
                  <span className="font-medium text-right max-w-[200px]">{formData.address}</span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between">
                  <span className="text-muted-foreground">Producto</span>
                  <span className="font-medium">Camiseta Team Tincho</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Talla</span>
                  <span className="font-bold text-primary">Única</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cantidad</span>
                  <span className="font-bold">{formData.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total a pagar</span>
                  <span className="font-bold text-xl text-gradient-gold">${formattedTotalPrice} COP</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("form")} className="flex-1">
                  Editar datos
                </Button>
                <Button 
                  onClick={handleConfirm}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-gold-light font-display font-semibold"
                >
                  Confirmar pedido
                </Button>
              </div>
            </div>
          )}

          {/* Success Step */}
          {step === "success" && (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-scale-in">
                <Check className="w-12 h-12 text-primary" />
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold mb-2">¡Gracias por tu apoyo!</h3>
                <p className="text-muted-foreground">
                  Tu pedido ha sido registrado exitosamente. Te contactaremos pronto por WhatsApp para coordinar la entrega.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-secondary border border-border text-left">
                <p className="text-sm text-muted-foreground mb-2">Resumen del pedido:</p>
                <p className="font-medium">Camiseta Team Tincho - Talla Única × {formData.quantity}</p>
                <p className="text-primary font-bold text-lg">${formattedTotalPrice} COP</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Te contactaremos por WhatsApp para confirmar el pago y coordinar el envío.
                </p>
              </div>

              <Button 
                onClick={handleClose}
                className="w-full bg-primary text-primary-foreground hover:bg-gold-light font-display font-semibold"
              >
                Cerrar
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
