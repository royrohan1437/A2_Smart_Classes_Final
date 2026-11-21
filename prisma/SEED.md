# Seed data strategy

The project intentionally has no seed records yet. The relational model is scheduled for T17, and no verified institute, faculty, student, payment, or academic records are available for fixtures.

After T17, add only deterministic development reference data that is clearly synthetic, never personal data or credentials. Production data must be provisioned through approved admin workflows. Keep migrations separate from seeding, make the seed operation safe to repeat, and do not run it against production.
