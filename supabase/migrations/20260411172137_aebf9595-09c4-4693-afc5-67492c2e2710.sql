
-- Add length constraints to contact_submissions
ALTER TABLE public.contact_submissions
  ADD CONSTRAINT chk_name_length CHECK (char_length(name) <= 100),
  ADD CONSTRAINT chk_phone_format CHECK (char_length(phone) BETWEEN 7 AND 30),
  ADD CONSTRAINT chk_message_length CHECK (char_length(message) <= 2000);

-- Add length constraints to whatsapp_orders
ALTER TABLE public.whatsapp_orders
  ADD CONSTRAINT chk_customer_name_length CHECK (char_length(customer_name) <= 100),
  ADD CONSTRAINT chk_city_length CHECK (char_length(city) <= 100),
  ADD CONSTRAINT chk_product_name_length CHECK (char_length(product_name) <= 200),
  ADD CONSTRAINT chk_product_price_length CHECK (char_length(product_price) <= 50);
