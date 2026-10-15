# Design Specification: Unnoise Smart Sleep Pillow (Blue & White Minimalist Theme)

**โปรเจกต์**: Unnoise Landing Page UI  
**วันที่**: 2026-10-16 (Updated v2.0)  

---

## 1. Design System & Mood
- **สไตล์**: Sport-Tech Minimalism (สไตล์ Strava, Whoop, Apple Fitness)
- **Palette สีใหม่**:
  - Primary Navy: `#1E3A8A` (Deep Royal Navy สำหรับองค์ประกอบหลักและแบรนด์)
  - Tech Accent Blue: `#2563EB` (Vibrant Electric Blue สำหรับปุ่ม CTA และจุดเน้น)
  - Sky/Glow Blue: `#38BDF8` (สำหรับแถบคลื่นความถี่และสถานะ)
  - Soft Blue Tint: `#EFF6FF` (Ice Blue สำหรับพื้นหลัง Badge และการ์ดไฮไลท์)
  - Subtle Blue Background: `#F8FAFC` (Slate-50 Clean Minimalist Canvas)
  - Card Surface: `#FFFFFF` (พร้อมเส้นขอบคมชัด `#E2E8F0` และเงาละมุน `0 10px 25px rgba(30, 58, 138, 0.05)`)
  - Text Main: `#0F172A` (Deep Slate Black อ่านง่าย คมกริบ)
  - Text Muted: `#475569` (Slate Gray)
  - Success/Streak Orange: `#EA580C` (Strava-like Fire Streak 🔥)

## 2. Typography
- **ภาษาอังกฤษ**: `Inter`, sans-serif
- **ภาษาไทย**: `Prompt`, sans-serif
- สไตล์ตัวเลขแบบ Athletic/Tech Condensed สำหรับสถิติเวลาและคะแนน

## 3. Strava-Style UI Components
- **Sleep Activity Feed Card**:
  - โปรไฟล์ผู้ใช้, วันที่และเวลาที่นอน
  - Title ของกิจกรรม (เช่น "คืนฟื้นฟูหลังวิ่งมาราธอน", "หลับลึก 8 ชม. สดชื่นมาก")
  - Metric Summary Grid: เวลารวม, Deep Sleep %, คะแนนการนอน
  - ปุ่ม "Give Kudos" พร้อมไอคอนปรบมือ/หัวใจ กดแล้วตัวเลขขึ้นทันที
- **Weekly Sleep Volume Bar Chart**:
  - แท่งชาร์จ 7 วัน (จันทร์ - อาทิตย์)
  - เส้นประแนวนอนสีน้ำเงินระบุเป้าหมาย (Goal: 8h/night)
  - แถบสรุป Total Weekly Hours และ Average Score
