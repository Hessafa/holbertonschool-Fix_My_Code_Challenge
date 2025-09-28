#!/usr/bin/env ruby

args = ARGV.map { |s| Integer(s) rescue s }  # or stricter conversion if needed
# If all are integers, sort numeric:
if args.all? { |a| a.is_a?(Integer) }
  args.sort!
else
  args.sort!
end
args.each { |a| puts a }
