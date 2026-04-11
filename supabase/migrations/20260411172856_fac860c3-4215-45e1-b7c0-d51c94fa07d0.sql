
-- =============================================
-- contact_submissions: tighten policies
-- =============================================

-- Drop the old overly-permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

-- New INSERT policy: only anon role can insert (public form submissions)
CREATE POLICY "Anon can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Explicit deny SELECT for anon and authenticated
CREATE POLICY "No public read access to contact submissions"
  ON public.contact_submissions
  FOR SELECT
  TO anon, authenticated
  USING (false);

-- Explicit deny UPDATE
CREATE POLICY "No public update on contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  TO anon, authenticated
  USING (false);

-- Explicit deny DELETE
CREATE POLICY "No public delete on contact submissions"
  ON public.contact_submissions
  FOR DELETE
  TO anon, authenticated
  USING (false);

-- =============================================
-- whatsapp_orders: tighten policies
-- =============================================

-- Drop the old overly-permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can place WhatsApp order" ON public.whatsapp_orders;

-- New INSERT policy: only anon role can insert
CREATE POLICY "Anon can place WhatsApp order"
  ON public.whatsapp_orders
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Explicit deny SELECT
CREATE POLICY "No public read access to whatsapp orders"
  ON public.whatsapp_orders
  FOR SELECT
  TO anon, authenticated
  USING (false);

-- Explicit deny UPDATE
CREATE POLICY "No public update on whatsapp orders"
  ON public.whatsapp_orders
  FOR UPDATE
  TO anon, authenticated
  USING (false);

-- Explicit deny DELETE
CREATE POLICY "No public delete on whatsapp orders"
  ON public.whatsapp_orders
  FOR DELETE
  TO anon, authenticated
  USING (false);
