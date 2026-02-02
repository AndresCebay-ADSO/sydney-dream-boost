import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { logger } from "./logger";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Configuración de WhatsApp para pedidos
// Puede ser sobrescrito por variable de entorno
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "573116317047";

export interface OrderData {
  name: string;
  phone: string;
  address: string;
  city: string;
  quantity: number;
}

export function generateWhatsAppMessage(orderData: OrderData): string {
  const totalPrice = orderData.quantity * 120000;
  const formattedTotalPrice = totalPrice.toLocaleString('es-CO');

  const message = `*NUEVO PEDIDO - CAMISETA TEAM TINCHO*

--------------------------------

*DATOS DEL CLIENTE*

• Nombre: ${orderData.name}
• Teléfono: ${orderData.phone}
• Ciudad: ${orderData.city}
• Dirección: ${orderData.address}

--------------------------------

*DETALLES DEL PEDIDO*

• Producto: Camiseta Team Tincho (Edición Limitada)
• Género: Unisex
• Talla: Única
• Cantidad: ${orderData.quantity} ${orderData.quantity === 1 ? 'unidad' : 'unidades'}

--------------------------------

*TOTAL A PAGAR*

$${formattedTotalPrice} COP

--------------------------------

Por favor, confirma la disponibilidad del producto y coordina con el cliente el método de pago y la entrega.

¡Gracias!`;

  return message;
}

export function sendOrderToWhatsApp(orderData: OrderData): Promise<void> {
  return new Promise((resolve, reject) => {
    logger.log('📦 Enviando pedido por WhatsApp...');
    logger.log('👤 Datos del pedido:', orderData);

    try {
      const message = generateWhatsAppMessage(orderData);
      // Codificar el mensaje correctamente para la URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      logger.log('📱 Número de WhatsApp:', WHATSAPP_NUMBER);
      logger.log('💬 Mensaje generado:', message);
      logger.log('🔗 URL completa:', whatsappUrl);

      // Usar window.location.href para evitar bloqueadores de pop-ups
      window.location.href = whatsappUrl;
      logger.log('✅ WhatsApp abierto exitosamente');
      
      // Resolver después de un pequeño delay para permitir la navegación
      setTimeout(() => resolve(), 100);
    } catch (error) {
      logger.error('❌ Error al abrir WhatsApp:', error);
      reject(error);
    }
  });
}

