
-- Create appointments table
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  treatment TEXT NOT NULL,
  preferred_date TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public booking form)
CREATE POLICY "Anyone can create appointments"
  ON public.appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated admin can view/manage
CREATE POLICY "Authenticated users can view appointments"
  ON public.appointments
  FOR SELECT
  TO authenticated
  USING (true);
