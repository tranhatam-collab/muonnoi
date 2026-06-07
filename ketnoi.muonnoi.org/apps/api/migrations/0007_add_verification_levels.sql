-- Migration: Add 9-level verification system + trust score
-- Date: 2026-06-06
-- Purpose: Expand from 4 generic tiers to 9 explicit levels with trust score

-- Add numeric verification level (1-9)
ALTER TABLE users ADD COLUMN verification_level INTEGER DEFAULT 1;

-- Add trust score (behavior-based, cannot be bought)
ALTER TABLE users ADD COLUMN trust_score INTEGER DEFAULT 0;

-- Add membership tier (cosmetic / package, separate from trust)
ALTER TABLE users ADD COLUMN membership_tier TEXT DEFAULT 'free';

-- Add intent verification status
ALTER TABLE users ADD COLUMN intent_verified INTEGER DEFAULT 0;

-- Add readiness level for Safe Date
ALTER TABLE users ADD COLUMN safe_date_ready INTEGER DEFAULT 0;

-- Add profile depth score (completeness)
ALTER TABLE users ADD COLUMN profile_depth INTEGER DEFAULT 0;

-- Update existing users: map old tiers to new levels
UPDATE users SET verification_level = 1 WHERE verification_tier = 'basic';
UPDATE users SET verification_level = 3 WHERE verification_tier = 'verified';
UPDATE users SET verification_level = 5 WHERE verification_tier = 'trusted';
UPDATE users SET verification_level = 7 WHERE verification_tier = 'premium';

-- Index for level lookups
CREATE INDEX IF NOT EXISTS idx_users_verification_level ON users(verification_level);
CREATE INDEX IF NOT EXISTS idx_users_trust_score ON users(trust_score);
